const MaiorOuIgual = (a, b) => {
  if (a > b || a === b) {
    return [a, b];
  } else {
    return "Falso";
  }
};
console.log(MaiorOuIgual(4, 2));
console.log(MaiorOuIgual(1, 1));
console.log(MaiorOuIgual(2, 9));
console.log(MaiorOuIgual("5", 10));
console.log(MaiorOuIgual(true, 77));
