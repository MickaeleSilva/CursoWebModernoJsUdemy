const porta = 3003; // e precisa ter uma

const express = require("express");
const app = express();

// COR - Middleware
app.get("/produtos", (req, res, next) => {
  res.send({ nome: "Notebook", preco: 123.45 }); // converter para json
});

app.listen(porta, () => {
  console.log(`servidor está executando na porta ${porta}.`);
});
