process.env.HMR_PORT=0;process.env.HMR_HOSTNAME="localhost";parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
"use strict";var e=require("electron"),o=require("path"),n=l(o),r=require("url"),t=l(r),i=require("serialport"),a=l(i);function l(e){return e&&e.__esModule?e:{default:e}}process.env.ELECTRON_START_URL&&require("electron-reload")(__dirname),a.default.list().then(function(e){console.log("PORTS AVAILABLE: ",e)}).catch(function(e){if(e)throw e});var u=void 0;e.app.on("ready",function(){var o=new e.BrowserWindow({width:800,height:600});console.log("__dirname",__dirname);var r=process.env.ELECTRON_START_URL||t.default.format({pathname:n.default.join(__dirname,"./build/index.html"),protocol:"file:",slashes:!0});o.loadURL(r),o.webContents.openDevTools(),o.on("closed",function(){o=null})}),e.app.on("window-all-closed",function(){"darwin"!==process.platform&&e.app.quit()}),e.app.on("activate",function(){null===u&&createWindow()});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.map