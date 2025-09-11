const fs = require("fs").promises; // versão baseada em Promises

const produto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.15,
};

async function salvarProduto() {
  try {
    await fs.writeFile(
      __dirname + "/escrevendoArquivos.json",
      JSON.stringify(produto, null, 2) // o "null, 2" deixa formatado
    );
    console.log("Arquivo salvo corretamente");
  } catch (err) {
    console.error("Erro ao salvar arquivo:", err);
  }
}

salvarProduto();
