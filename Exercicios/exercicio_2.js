const IdadeEmDias = (idade) => {
  let idadeemdias = idade * 365;
  return `Você tem ${idadeemdias} dias de idade!`;
};

console.log(IdadeEmDias(1));
console.log(IdadeEmDias(5));
console.log(IdadeEmDias(10));
