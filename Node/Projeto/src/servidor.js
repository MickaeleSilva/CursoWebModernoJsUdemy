const porta = 3003; // e precisa ter uma

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //middleware disparado para todas as requisições e se o padrão for urlencoded ele trasnformará o corpo da req em objetos para acessa-lo de forma correta

// COR - Middleware
app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProducts());
});

app.get("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.getProduct(req.params.id);
  if (!produto || !Object.keys(produto).length)
    return res.status(404).send("Produto inexistente");
  res.send(produto);
});

app.post("/produtos", (req, res, next) => {
  const product = bancoDeDados.saveProduct({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(product); //JSON
});

app.delete("/produtos/:id", (req, res) => {
  const id = req.params.id;
  const produto = bancoDeDados.deleteProduct(id);
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`servidor está executando na porta ${porta}.`);
});
