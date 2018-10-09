// Basic init
// const electron = require('electron')
// const {app, BrowserWindow} = electron
// const path = require('path');
// const url = require('url');
// const SerialPort = require('serialport');

import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url';
import SerialPort from 'serialport'

// Let electron reloads by itself when webpack watches changes in ./app/
if (process.env.ELECTRON_START_URL) {
  require('electron-reload')(__dirname)
}

SerialPort.list()
.then(ports => {
  console.log('PORTS AVAILABLE: ', ports);
})
.catch(err => {
  if (err) throw err;
});

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    console.log('__dirname', __dirname)
    const startUrl = process.env.ELECTRON_START_URL || url.format({
          pathname: path.join(__dirname, './index.html'),
          protocol: 'file:',
          slashes: true
        });

    mainWindow.loadURL(startUrl)

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});
