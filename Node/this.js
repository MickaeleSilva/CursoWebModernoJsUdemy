console.log("this === global?", this === global); // false
console.log("this === module?", this === module); // false
console.log("this === module.exports?", this === module.exports); // true
console.log("this === exports?", this === exports); // true

// this é o mesmo que module.exports, então:
this.hello = "Oi";
console.log("module.exports.hello:", module.exports.hello); // "Oi"
console.log("exports.hello:", exports.hello); // "Oi"

// Confirmando que module tem a propriedade "exports"
console.log(
  "module.hasOwnProperty('exports'):",
  module.hasOwnProperty("exports")
); // true

// Dentro de uma função normal (this === global)
function testando() {
  console.log("this === exports dentro da função?", this === exports); // geralmente false
  console.log("this.hello dentro da função:", this.hello); // undefined (se não for global.hello)
  console.log("this === global dentro da função?", this === global); // geralmente true (modo não estrito)
}
testando();

// Dentro de uma arrow function (this === module.exports/exports)
const testandoArrow = () => {
  console.log("this === exports dentro da arrow?", this === exports); // true
  console.log("this.hello dentro da arrow:", this.hello); // "Oi"
  console.log("this === global dentro da arrow?", this === global); // false
};
testandoArrow();

console.log(" ");

// A importância de usar "use strict" para evitar criação de variáveis globais acidentais
function f() {
  x = 10; // cria variável global sem 'var', 'let' ou 'const' (modo não estrito)
}

// Aqui a variável 'x' **não existe ainda**
console.log(global.x); // undefined

f(); // Executa a função, variável global é criada

console.log(global.x); // 10 — agora existe!

/* Com "use strict", o código abaixo causaria erro, evitando variável global acidental

"use strict";

function g() {
  y = 20; // ReferenceError: y is not defined
}
g();
*/
