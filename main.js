'use strict';

const menubar = require('menubar');
const ipc = require('electron').ipcMain;
const mb = menubar({ dir: __dirname + '/app', width: 328, height: 428, preloadWindow: true, 'window-position': 'topRight' });

mb.on('show', function () {
  mb.window.webContents.send('show');
});

mb.app.on('activate', function () {
  mb.showWindow();
});

// When you receive the abort message, close the app
ipc.on('abort', function () {
  mb.hideWindow();
});
