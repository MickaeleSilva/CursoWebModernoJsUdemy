const contarCaracteres = (carac, frase) => {
  const regex = new RegExp(carac, "g");
  const resultado = frase.match(regex);
  return resultado.length;
};

console.log(contarCaracteres("a", "banana"));
