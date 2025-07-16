const verificaDigitos = (arr, qntd) => {
  const resultado = arr.filter((item) => item.toString().length === qntd);

  return resultado;
};

const arraydenumeros = [12, 3, 900, 7, 180];

console.log(verificaDigitos(arraydenumeros, 3));
