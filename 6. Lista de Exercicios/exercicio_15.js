const paresDeIndicesPares = (arr) => {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && i % 2 === 0) {
      resultado.push([arr[i], i]);
    }
  }
  return resultado;
};

const numeroFav = [2, 4, 6, 8, 10, 55, 23, 100, 80, 9];

console.log(paresDeIndicesPares(numeroFav));
