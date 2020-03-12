     const electron = require ("electron");

const {
    app,
    BrowserWindow,
    Menu,
    ipcMain,
} = electron;

let todayWindow;
let createWindow;
let listWindow;

app.on("ready", () => {
    todayWindow = new BrowserWindow({
    webPreferences: {
        nodeIntegration: true
    },
    title: "Aplikasi Dokter"
});

    todayWindow.loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("closed", () => {
        app.quit();
        todayWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const listWindowCreator = () => {
    listWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "All Appointments"
    });
    listWindow.setMenu(null);
    listWindow.loadURL(`file://${__dirname}/list.html`);
    listWindow.on("closed", () =>(listWindow = null ))
    // fungsi memanggil halaman list
};

const createWindowCreator = () => {
    createWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Create Appointments"
    });
    createWindow.setMenu(null);
    createWindow.loadURL(`file://${__dirname}/create.html`);
    createWindow.on("closed", () =>(createWindow = null ))
    // fungsi memanggil halaman create
};

ipcMain.on("appointment:create", (event, appointment) =>{
    console.log(appointment);
});
// memanggil create 
ipcMain.on("appointment:request:list", event =>{
    console.log("here");
});

const menuTemplate = [{
    label: "File",
    submenu: [{
        label: "New Appointment",

        click() {
            createWindowCreator();
        }
        },
          {
              label: "All Appointment",
              click() {
                  listWindowCreator();
              }
          },
          {
              label: "QUIT",
              //accelerator: process.platform ==="darwin" ? "Command+Q" : "Ctrl + Q",
              click() {
                  app.quit();

              }
          }
    ]
},
{
    label:"view",
    submenu:[{
        role: "reload"
    }, {
        role: "toggledevtools"
    }]
}

];



