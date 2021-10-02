const express = require("express");
const app = express();
const path = require("path");
const Pokemons = [
  {
    Numero: 004,
    Nome: "Charmander",
    Tipo: "Fogo",
    Imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    Descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
    Altura: 0.6,
    Peso: 8.5,
    Categoria: "Lagarto",
    Habilidade: "Chama",
  },
  {
    Numero: 001,
    Nome: "Bulbasaur",
    Tipo: "Grama",
    Imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    Descricao:
      "Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.",
    Altura: 0.7,
    Peso: 6.9,
    Categoria: "Semente",
    Habilidade: "Crescimento Exagerado",
  },
  {
    Numero: 007,
    Nome: "Squirtle",
    Tipo: "Agua",
    Imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    Descricao:
      "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
    Altura: 0.5,
    Peso: 9.0,
    Categoria: "Pequena Tartaruga",
    Habilidade: "Torrente",
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
