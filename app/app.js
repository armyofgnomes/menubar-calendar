'use strict';
var ipc = require('electron').ipcRenderer;

function updateTime() {
  document.querySelector('paper-date-picker').date = new Date();
}

ipc.on('show', function(event, message) {
    updateTime();
});
