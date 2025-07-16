const objetoParaArray = (obj) => {
  return Object.entries(obj);
};

const pessoa = {
  nome: "Mickaele",
  idade: 21,
  cidade: "São Paulo",
};

console.log(objetoParaArray(pessoa));
