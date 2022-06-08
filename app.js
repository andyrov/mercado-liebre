const express = require('express');
const app = express();
app.use(express.static('public'));

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );

app.listen(process.env.PORT || 5050 , function (){
    console.log("Servidor corriendo en el puerto 5050");
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});