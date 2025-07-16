// Usando Expressão Regular: RegEx

const contarPalavras = (frase) => {
  const palavras = (frase.match(/ /g) || []).length;
  return palavras + 1;
};

console.log(contarPalavras("Eu amo Meu esposo"));
console.log(contarPalavras("Casa"));
console.log(contarPalavras("Olá Mundo!"));
console.log(" ");

//ou

const contarPalavras2 = (frase) => {
  const palavras = (frase.trim().match(/\S+/g) || []).length; // O || [] serve para garantir que, caso o match retorne null, o valor seja substituído por um array vazio, evitando erro ao tentar acessar .length.
  return palavras;
};

console.log(contarPalavras("Eu gosto de dançar"));
console.log(contarPalavras("bolo"));
console.log(contarPalavras("Pássaro azul"));
