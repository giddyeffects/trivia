const {app, BrowserWindow} = require('electron')
let url = require('url')
const path = require('path')

let win = null;

function createWindow (){
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 800, backgroundColor: '#43bf43'});

  // Specify entry point to default entry point of vue.js
  //uncomment line below to if using npm run dev
  win.loadURL('http://localhost:8080');
  
  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, 'dist/index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))

  // Remove window once app is closed
  win.on('closed', () => {
  win = null;
  });

}

app.on('ready', createWindow);

//create the application window if the window variable is null
app.on('activate', () => { 
  if (win === null) {
  createWindow()
  }
})
//quit the app once closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
  app.quit();
  }
});