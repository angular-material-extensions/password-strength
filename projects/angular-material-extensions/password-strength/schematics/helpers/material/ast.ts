import {Tree} from '@angular-devkit/schematics';
import {
  addModuleImportToModule as originalAddModuleImportToModule,
  addModuleImportToRootModule as originalAddModuleImportToRootModule,
} from '@angular/cdk/schematics';
import {WorkspaceProject} from '@angular-devkit/core/src/experimental/workspace';

/** Import and add module to root app module. */
export function addModuleImportToRootModule(host: Tree, moduleName: string, src: string, project: WorkspaceProject) {
  return originalAddModuleImportToRootModule(host, moduleName, src, project);
}

/**
 * Import and add module to specific module path.
 * @param host the tree we are updating
 * @param modulePath src location of the module to import
 * @param moduleName name of module to import
 * @param src src location to import
 */
export function addModuleImportToModule(host: Tree, modulePath: string, moduleName: string, src: string) {
  return originalAddModuleImportToModule(host, modulePath, moduleName, src);
}
