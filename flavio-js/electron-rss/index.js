const {app, BrowserWindow} = require('electron')
const fs = require('fs')

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences:{
            nodeIntegration: true
        },
        win.webContents.on('did-finish-load', function(){
            rs.readFile(
                __dirname + "/tailwind-ui.min.css",
                'utf-8',
                function (error, data){
                    if(!error){
                        const formattedData = data.replace('/\s{2,10}/g', "").trim()
                        win.webContent.insertCSS(formatedData)
                    }
                }
            )
        })
    })
    try {
  require("electron-reloader")(module)
} catch (_) {}
    // and load the index.html page of the app
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)