const removerPropriedade = (obj, propriedade) => {
  delete obj[propriedade];
  return obj;
};

const processo22 = {
  adress: "Rua Manuel José",
  cep: "05999-999",
  numero: 450,
  tipo: "apartamento",
  complemento: "Apto M13",
  processo: "Financiado",
  rgpro: 892291342,
};

console.log(removerPropriedade(processo22, "rgpro"));
console.log(" ");
console.log(removerPropriedade({ a: 1, b: 2, c: 3 }, "a"));
