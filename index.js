const express = require('express');
const app = express();
const path = require('path');
const lista = [{},{},{}];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    const lista = ["teste1", "teste2", "teste3", "teste4", "teste5"];
    res.render('index', {titulo:"Pagina principal", conteudos: lista});
})
app.get('/cadastro', (req, res) => {
    res.render('cadastro');
}) 
app.get('/detalhes', (req, res) => {
    res.render('detalhes');
})
app.get('/formulario', (req, res) => {
    const {nome, email, password} = req.body;
    res.send({nome: nome, email: email, password: password});
})
app.post('/formulario', (req, res) => {
    const {nome, email, password} = req.body;
    const site = {nome: nome, email: email, password: password}
    res.render('index')
    res.send({nome: nome, email: email, password: password});
})

app.listen(3000);