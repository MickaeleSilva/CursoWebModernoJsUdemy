/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e
retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro
inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo
ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false,
portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo. */

const verificaInt = (num, min, max, inc = false) => {
  if (inc) {
    // valores booleanos quando mencionados em if já estão questionando se é true
    if (min <= num && num <= max) {
      return `${num} esta entre ou é igual a ${min} e ${max} !!`;
    } else {
      return `${num} NÃO esta entre ou é igual a ${min} e ${max} !!`;
    }
  } else {
    if (min < num && num < max) {
      return `${num} esta entre ${min} e ${max}!!`;
    } else {
      return `${num} NÃO esta entre ${min} e ${max}!!`;
    }
  }
};

console.log(verificaInt(5, 0, 10, true));
console.log(verificaInt(5, 0, 10));
console.log(verificaInt(5, 5, 10, true));
console.log(verificaInt(10, 11, 21, true));
