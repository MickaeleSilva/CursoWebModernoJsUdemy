const selecionaPrimeiroUltimo = (arr) => {
  return [arr[0], arr[arr.length - 1]];
};

console.log(selecionaPrimeiroUltimo([1, 2, 3, 10]));
console.log(selecionaPrimeiroUltimo([1, 2, 6, 0]));
console.log(selecionaPrimeiroUltimo(["primeiro", 2, 3, "último"]));
