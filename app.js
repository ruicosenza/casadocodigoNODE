var app = require ('./config/express')();
var rotasProdutos = require('./app/routes/produtos');

app.listen(3000,function(){
    console.log("servidor rodando")
});