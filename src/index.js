const {app, BrowserWindow} = require("electron")

app.whenReady()
    .then(function(){
        //Criando Janela
        const janela = new BrowserWindow({
            autoHideMenuBar: true,
            heigth: 600,
            resizeble: false,
            width: 800
        })

        janela.loadFile("./public/index.html")
    })
    .catch(function(erro){
        console.log(erro)
    })