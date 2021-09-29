const express = require('express');
const app = express();
const path = require('path');
const lista = ["teste1", "teste2", "teste3", "teste4", "teste5"];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get('/', (req, res) => {
    const lista = ["teste1", "teste2", "teste3", "teste4", "teste5"];
    res.render('index', {titulo:"Pagina principal"});
})
app.get('/cadastro', (req, res) => {
    res.render('cadastro');
}) 
app.get('/detalhes', (req, res) => {
    res.render('detalhes');
})

app.listen(3000);