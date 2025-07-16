const calculaMedia = (...valores) => {
  const total = valores.reduce((acc, valor) => acc + valor, 0);
  return total / valores.length;
};

console.log(calculaMedia(10, 20, 30));
console.log(calculaMedia(100, 220, 430));
console.log(calculaMedia(102, 240, 630));
