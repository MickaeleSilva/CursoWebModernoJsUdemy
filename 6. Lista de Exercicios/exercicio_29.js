const segundoMaior = (arr) => {
  const unicos = [...new Set(arr)].sort((a, b) => b - a);
  return unicos[1] !== undefined ? unicos[1] : null;
};

const numeros = [12, 3, 900, 7, 180];
console.log(segundoMaior(numeros)); // 180
