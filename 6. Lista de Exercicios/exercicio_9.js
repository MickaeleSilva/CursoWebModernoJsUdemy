const rep = (item, quan) => {
  let resultado = [];
  for (let i = 0; i < quan; i++) {
    resultado.push(item);
  }
  return resultado;
};

console.log(rep("olá", 3)); // ["iu", "iu", "iu"]
