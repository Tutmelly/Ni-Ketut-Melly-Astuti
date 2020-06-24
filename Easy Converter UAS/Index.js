const electron = require("electron");
const { v4 : uuidv4 } = require('uuid');
uuidv4();
const fs = require ('fs'); 
const {app, BrowserWindow, Menu, ipcMain} = electron;

let berandaWindow;
let konversiWindow;


let pengguna = [];

fs.readFile("data_pengguna.json", (err, jsonpengguna) => {
    if(!err){
        const olddata =JSON.parse(jsonpengguna);
        pengguna = olddata;
    }
});

app.on("ready",  () => {
    berandaWindow = new BrowserWindow({
       webPreferences : {
           nodeIntegration : true
        },
        title : "Easy Converter"  
    });

    berandaWindow.loadURL(`file://${__dirname}/beranda.html`);
    berandaWindow.on("closed", () => {

        const jsondata = JSON.stringify(pengguna);
        fs.writeFileSync("data_pengguna.json", jsondata);
        
        app.quit();
        berandaWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const konversiWindowCreator = () => {
    konversiWindow = new BrowserWindow ({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Daftar Konversi"
    });

    konversiWindow.setMenu(null);
    konversiWindow.loadURL(`file://${__dirname}/daftarkonversi.html`);
    konversiWindow.on("closed", ()  => (konversitWindow = null));
};

ipcMain.on("databio", function(){
    berandaWindow.loadURL(`file://${__dirname}/inputdatapengguna.html`);
});

ipcMain.on("hallkonversi", function(){
    berandaWindow.loadURL(`file://${__dirname}/daftarkonversi.html`);
});

ipcMain.on("suhu", function(){
    berandaWindow.loadURL(`file://${__dirname}/suhu.html`);
});

ipcMain.on("waktu", function(){
    berandaWindow.loadURL(`file://${__dirname}/waktu.html`);
});

ipcMain.on("data", function(){
    berandaWindow.loadURL(`file://${__dirname}/transmisi_data.html`);
});

ipcMain.on("massa", function(){
    berandaWindow.loadURL(`file://${__dirname}/massa.html`);
});

ipcMain.on("panjang", function(){
    berandaWindow.loadURL(`file://${__dirname}/panjang.html`);
});

ipcMain.on("bilangan", function(){
    berandaWindow.loadURL(`file://${__dirname}/bil.html`);
});


ipcMain.on("create:data", (event, data) => {
    data["id"] = uuidv4();
    pengguna.push(data);
    console.log(pengguna);

});

ipcMain.on("datadiri:request:list", event => {
    berandaWindow.webContents.send('datadiri:response:list', pengguna)
});




const menuTemplate = 

[
    {
        label : "Beranda",
        click()        
        {
            berandaWindow.loadURL(`file://${__dirname}/beranda.html`);
        }
    },
    {
        label : "Konversi",
        click() {
            berandaWindow.loadURL(`file://${__dirname}/daftarkonversi.html`);
        }
    },
    {
        label:"Riwayat Pengguna",
        click()
        {
            berandaWindow.loadURL(`file://${__dirname}/daftarpengguna.html`);
        }
    },
    {
        label: "Quit",
        accelerato : process.platform === "darwin" ? "Command+Q" :
        "Ctrl+Q",
        click(){
        app.quit(); 
        }
    },
    {
        label:"View",
        submenu:[{
            role: "reload"
        }, {
            role: "toggledevtools"
        }]
    },
];