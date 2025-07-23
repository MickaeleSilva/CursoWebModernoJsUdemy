// Da pasta 7.Node -> moduloA
const moduloA = require("../../moduloA");
console.log(moduloA.ola);

// Da pasta 7.Node -> moduloB
const moduloB = require("../../moduloB");
console.log(moduloB.metade(10)); // Deve mostrar 5

// Da pasta node_modules -> sua criação
// se a pasta tiver index.js, ele ja acha! (index.js na pasta saudacao em node_modules)
const saudacao = require("saudacao");
console.log(saudacao.ola);

// de outro módulo dentro de saudacao que não seja o index
const teste = require("saudacao/teste");

console.log(teste.ola); // 👉 Vai mostrar: 'Olá do teste'

/**  módulo nativo (http)-----------------
const http = require("http");

http
  .createServer((req, res) => {
    res.write("Bom Dia!");
    res.end();
  })
  .listen(8080);

*/

//importando da PastaC
const c = require("./PastaC/index");
// ou
//const c = require("./pastaC"); // procura index automaticamente
console.log(c.ola2);
