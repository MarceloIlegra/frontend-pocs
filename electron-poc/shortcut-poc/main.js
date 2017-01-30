'use strict';

const {app, BrowserWindow, globalShortcut} = require('electron');
const localshortcut = require('electron-localshortcut');
const path = require('path');
const url = require('url');

var mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))

    globalShortcut.register('CommandOrControl+X', () => {
      console.log('CommandOrControl+X is pressed (GLOBAL)')
    })

    localshortcut.register(mainWindow, 'CommandOrControl+B', () => {
        console.log('CommandOrControl+B is pressed (LOCAL WINDOW)')
    });
});
