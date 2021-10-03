const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

let Pokemons = [
  {
    Nome: "Charmander",
    Tipo: "Fogo",
    Imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    Descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que vapor jorra da ponta da sua cauda.",
    Altura: 0.6,
    Peso: 8.5,
    Categoria: "Lagarto",
    Habilidade: "Chama",
  },
  {
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
    Nome: "Squirtle",
    Tipo: "Agua",
    Imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    Descricao:
      "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com uma força vigorosa.",
    Altura: 0.5,
    Peso: 9.0,
    Categoria: "Pequena Tartaruga",
    Habilidade: "Torrente",
  },
];

let mensagem = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  const pokemons = Pokemons;
  setTimeout(() => {
    mensagem = "";
  }, 1000);
  res.render("index", { pokedex: pokemons, mensagem });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.get("/detalhes/:ind", (req, res) => {
  const indice = req.params.ind;
  const pokemons = Pokemons[indice];
  res.render("detalhes", { pokemon: pokemons });
});

app.post("/formulario", (req, res) => {
  const { Nome, Tipo, Imagem, Descricao, Altura, Peso, Categoria, Habilidade } =
    req.body;
  Pokemons.push({
    Nome,
    Tipo,
    Imagem,
    Descricao,
    Altura,
    Peso,
    Categoria,
    Habilidade,
  }); // pega os pokemons via json do html usar push para colocar na lista
  mensagem = "Pokemon cadastrado com sucesso!!";
  res.redirect("/");
});

app.listen(3000);
