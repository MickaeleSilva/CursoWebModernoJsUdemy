const somarNumeros = (arr) => {
  resultado = 0;
  for (let i = 0; i < arr.length; i++) {
    resultado += arr[i];
  }
  return resultado;
};

const array1 = [10, 10, 10];
const array2 = [5, 5, 5];
const array3 = [1, 10, 100];

console.log(somarNumeros(array1));
console.log(somarNumeros(array2));
console.log(somarNumeros(array3));
