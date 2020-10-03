import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { format } from 'url';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 580,
    backgroundColor: '#171717',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
  } else {
    mainWindow.loadURL(
      format({
        pathname: join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  };

  mainWindow.on('closed', () => {
    mainWindow = null
  });
};

app.on('ready', createWindow).whenReady();

app.allowRendererProcessReuse = true;
