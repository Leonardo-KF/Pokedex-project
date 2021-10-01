const express = require('express');
const app = express();
const path = require('path');
const Pokemons = [{
    id: 0,
    numero: 004,
    nome: "Charmander",
    tipo: "Fogo",
    descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
    altura: 0.6,
    peso: 8.5,
    categoria: "Lagarto",
    habilidade: "Chama"
},
{
    id: 0,
    numero: 004,
    nome: "Charmander",
    tipo: "Fogo",
    descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
    altura: 0.6,
    peso: 8.5,
    categoria: "Lagarto",
    habilidade: "Chama"
},
{
    id: 0,
    numero: 004,
    nome: "Charmander",
    tipo: "Fogo",
    descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
    altura: 0.6,
    peso: 8.5,
    categoria: "Lagarto",
    habilidade: "Chama"
}];


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get('/', (req, res) => {
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
    const site = {nome: nome, email: email, password: password} // pega os pokemons via json do html usar push para colocar na lista
    res.render('index')
    res.send({nome: nome, email: email, password: password}); // passar os pokemons para pagina da pokedex
})

app.listen(3000);