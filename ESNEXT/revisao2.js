// Arrow function: função anônima

// Sintaxe básica, quando há um só parâmetro, os parênteses são opcionais:
const soma = (a) => a + 1;
console.log(soma(3));

// Com bloco e retorno explícito
const div = (a, b) => {
  return a / b;
};

// This
const lexico = () => this === exports;
console.log(lexico());

// parametro default
function log(texto = "Node") {
  console.log(texto);
}

log();
log(undefined);
log(null);
log("Sou Mais Forte");
log();

// operador ...Rest
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return `total: ${total}, indice 0: ${numeros[0]} ;`;
}
console.log(total(2, 3, 4, 5));
