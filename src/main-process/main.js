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
let winMain
let win1
let win2 

app.on('ready', () => {

    let winMain = new BrowserWindow({
        width: 800,
        height: 600
    })
    let win1 = new BrowserWindow({
        width: 700,
        height: 500
    })
    let win2 = new BrowserWindow({
        width: 600,
        height: 400
    })

    console.log('__dirname', __dirname)
    const startUrl = process.env.ELECTRON_START_URL_APP_MAIN || url.format({
          pathname: path.join(__dirname, './index.1.html'),
          protocol: 'file:',
          slashes: true
        });

    winMain.loadURL(startUrl)
    win1.loadURL(startUrl)
    win2.loadURL(startUrl)

    winMain.webContents.openDevTools()
    win1.webContents.openDevTools()
    win2.webContents.openDevTools()

    winMain.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        winMain = null
    })
    win1.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win1 = null
    })
    win2.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win2 = null
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
    if (winMain === null) {
        createWindow()
    }
    if (win1 === null) {
        createWindow()
    }
    if (win2 === null) {
        createWindow()
    }
});
