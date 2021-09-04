try {
  require("electron-reloader")(module)
} catch (_) {}

const fs = require('fs')
const path = require('path')
const {app, BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences:{
            nodeIntegration: true,
            preload: path.join(__dirname, 'client.js')
        },
    })
    // and load the index.html page of the app
    win.loadFile('index.html')
    win.webContents.on("did-finish-load", function () {
  fs.readFile(
    __dirname + "/tailwind-ui.min.css",
    "utf-8",
    function (error, data) {
      if (!error) {
        const formatedData = data.replace('/\s{2,10}/g', " ").trim()
        win.webContents.insertCSS(formatedData)
      }
    }
  )
})
}

app.whenReady().then(createWindow)