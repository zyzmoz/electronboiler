const electron = require('electron');
const request = require('request');
const database = require('./database/index');


const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    heigth: 786,
    width: 1024,
    webProferences: { backgroundThrottling: false },
    resizable: false,
    maximizable: false,
    show: false
  });

  mainWindow.maximize();
  mainWindow.show();

  // await database.connect();
  // await database.user.findAll();

  request('http://localhost:8080', (err, resoponse, body) => {
    if (!err && resoponse.statusCode == 200) {
      mainWindow.loadURL('http://localhost:8080/');
      mainWindow.webContents.openDevTools();


    } else {
      mainWindow.setMenu(null);
      mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
      // mainWindow.loadURL('http://localhost:3000/');
    }
  });


  mainWindow.on('closed', () => app.quit());
})