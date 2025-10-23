const newline = () => console.log(); // função para pular linhas no console

// let e const - escopos e acessos
{
  var v = 2; // var: escopo de função/global
  let l = 3; // let: escopo de bloco
  console.log("dentro do escopo:", l);
}
console.log("fora do escopo:", v);
// console.log(l); // ❌ ReferenceError

newline();

// Template literals - quebra de linhas e interpolação
const produto1 = { nome: "iPad", valor: 2000 };
console.log(
  `Este ${produto1.nome}
está saindo
por apenas R$${produto1.valor}!`
);

newline();

// Destructuring de objeto
const { nome, valor } = produto1; // cria novas constantes nome e valor
console.log(`Este ${nome} está saindo por apenas R$${valor}!`);

newline();

// Destructuring com renomeação para evitar conflito de nomes
const produto2 = { nome: "Celular", valor: 5000 };
const { nome: nomeProduto2, valor: valorProduto2 } = produto2;
console.log(nomeProduto2);

newline();

// Destructuring de strings e arrays
// Strings podem ser desestruturadas como arrays
const [, segunda, terceira, quarta] = "banana"; // pulando a primeira letra
console.log(segunda, terceira, quarta);

// Array com rest operator (...rest)
const frutas = ["maçã", "banana", "laranja", "uva", "melancia"];
const [pri, seg, ...outras] = frutas;
console.log(pri, seg, outras); // ["laranja", "uva", "melancia"]

// Skip e valor padrão em arrays
const numeros = [10, 20];
const [, segundo, terceiro = 30] = numeros; // pula o primeiro e define valor padrão
console.log(segundo, terceiro);
