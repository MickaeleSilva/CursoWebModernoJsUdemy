const funcaoDaSorte = (num) => {
  if (num < 1 || num > 10) {
    throw new Error("O número deve estar entre 1 e 10!");
  }
  const numSorteado = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  if (num == numSorteado) {
    return `Parabéns! o número ${num} foi sorteado!`;
  } else {
    return `Que pena! O Seu número não foi sortado, tente novamente!.`;
  }
};

console.log(funcaoDaSorte(1));
console.log(funcaoDaSorte(2));
console.log(funcaoDaSorte(3));
console.log(funcaoDaSorte(4));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(6));
console.log(funcaoDaSorte(7));
console.log(funcaoDaSorte(8));
