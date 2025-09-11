const fs = require("fs"); // Importa o módulo nativo fs (file system) do Node.js.

const caminho = __dirname + "/arquivo.json";

// 🔹 1) Lendo como string (síncrono)
const conteudoDoArqJson = fs.readFileSync(caminho, "utf-8");
console.log(`JSON puro: ${conteudoDoArqJson}`); // mostra o JSON bruto como texto
console.log(" ");

// 🔹 2) Convertendo de string para objeto
const config = JSON.parse(conteudoDoArqJson);

// agora sim conseguimos acessar os valores desse objeto

console.log(config.obj.user); // usuario
console.log(config.obj.pass); // 123456

// MESMA COISA FORMA RÁPIDA

// 🔹 3) Usando require (Node já faz o parse automaticamente)
const config2 = require("./arquivo.json");

console.log(config2.obj.host); // localhost
