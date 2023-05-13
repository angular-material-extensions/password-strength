// Load zone.js for the server.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import 'reflect-metadata';
import 'zone.js/node';

import { enableProdMode } from '@angular/core';
// Import module map for lazy loading
import { renderModule } from '@angular/platform-server';
import { ROUTES } from './static.paths';

// (global as any).WebSocket = require('ws');
// (global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModule } = require('./dist/server/main');

const BROWSER_FOLDER = join(process.cwd(), 'browser');

// Load the index.html file containing referances to your application bundle.
const index = readFileSync(join(BROWSER_FOLDER, 'index.html'), 'utf8');

let previousRender = Promise.resolve();

// Iterate each route path
ROUTES.forEach(route => {
  const fullPath = join(BROWSER_FOLDER, route);

  // Make sure the directory structure is there
  if (!existsSync(fullPath)) {
    mkdirSync(fullPath);
  }

  // Writes rendered HTML to index.html, replacing the file if it already exists.
  previousRender = previousRender
    .then(_ =>
      renderModule(AppServerModule, {
        document: index,
        url: route,
      })
    )
    .then(html => writeFileSync(join(fullPath, 'index.html'), html));
});
