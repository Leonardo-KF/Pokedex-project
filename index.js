const express = require("express");
const app = express();
const path = require("path");
const Pokemons = [
  {
    numero: 004,
    nome: "Charmander",
    tipo: "Fogo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
    altura: 0.6,
    peso: 8.5,
    categoria: "Lagarto",
    habilidade: "Chama",
  },
  {
    numero: 001,
    nome: "Bulbasaur",
    tipo: "Grama",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.",
    altura: 0.7,
    peso: 6.9,
    categoria: "Semente",
    habilidade: "Crescimento Exagerado",
  },
  {
    numero: 007,
    nome: "Squirtle",
    tipo: "Agua",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao:
      "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
    altura: 0.5,
    peso: 9.0,
    categoria: "Pequena Tartaruga",
    habilidade: "Torrente",
  },
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  const pokemons = Pokemons;
  res.render("index", { pokedex: pokemons });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.get("/detalhes/:ind", (req, res) => {
  const indice = req.params.ind;
  const pokemons = Pokemons[indice];
  res.render("detalhes", { pokemon: pokemons });
  console.log(pokemons);
});

app.get("/formulario", (req, res) => {
  const { nome, email, password } = req.body;
  res.send({ nome: nome, email: email, password: password });
});

app.post("/formulario", (req, res) => {
  const { nome, email, password } = req.body;
  const site = { nome: nome, email: email, password: password }; // pega os pokemons via json do html usar push para colocar na lista
  res.render("index");
});

app.listen(3000);
