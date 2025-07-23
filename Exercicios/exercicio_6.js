const Inverso = (valor) => {
  if (typeof valor === "boolean") {
    return !valor; // Inverte o valor booleano
  } else if (typeof valor === "number") {
    return -valor;
  } else {
    return "Valor não é booleano ou número";
  }
};

console.log(Inverso(true));
console.log(Inverso(false));
console.log(Inverso(42));
console.log(Inverso(180));
console.log(Inverso("love"));
