import { virtualFs, workspaces } from '@angular-devkit/core';
import {chain, noop, Rule, SchematicContext, SchematicsException, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {addPackageJsonDependency, NodeDependency, NodeDependencyType} from '../helpers';
import {addModuleImportToRootModule} from '@angular/cdk/schematics';

/** Loads the full version from the given Angular package gracefully. */
function loadPackageVersionGracefully(context: SchematicContext): string | null {
  try {
    context.logger.log('info', `🧟‍ @angular-material-extensions/password-strength
     is using the following version ${require(`../../package.json`).version}`);
    return require(`../../package.json`).version;
  } catch {
    return null;
  }
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {

    const ngCoreVersionTag = getPackageVersionFromPackageJson(host, '@angular/core');

    const dependencies: NodeDependency[] = [
      {
        type: NodeDependencyType.Default,
        version: loadPackageVersionGracefully(context) || 'latest',
        name: '@angular-material-extensions/password-strength'
      },
      {type: NodeDependencyType.Default, version: ngCoreVersionTag || '^9.0.0', name: '@angular/animations'},
      {type: NodeDependencyType.Default, version: ngCoreVersionTag || '^9.0.0', name: '@angular/forms'}
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

export function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);

    return host;
  };
}

export function addModuleToImports(options: any, project: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const moduleName = 'MatPasswordStrengthModule';

    addModuleImportToRootModule(host, moduleName, '@angular-material-extensions/password-strength', project);
    context.logger.log('info', `✅️ "${moduleName}" is imported into project ${options.project}`);

    return host;
  };
}

/** Gets the version of the specified package by looking at the package.json in the given tree. */
export function getPackageVersionFromPackageJson(tree: Tree, name: string): string | null {
  if (!tree.exists('package.json')) {
    return null;
  }

  const packageJson = JSON.parse(tree.read('package.json')!.toString('utf8'));

  if (packageJson.dependencies && packageJson.dependencies[name]) {
    return packageJson.dependencies[name];
  }

  return null;
}

function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}

export default function (options: any): Rule {
  return async (tree: Tree) => {
    const host = createHost(tree);
    const { workspace } = await workspaces.readWorkspace('/', host);

    if (!options.project) {
      options.project = workspace.extensions.defaultProject;
    }

    const project = workspace.projects.get(options.project);
    if (!project) {
      throw new SchematicsException(`Invalid project name: ${options.project}`);
    }

    return chain([
      options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
      options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
      options && options.skipModuleImport ? noop() : addModuleToImports(options, project),
    ]);
  };
}
