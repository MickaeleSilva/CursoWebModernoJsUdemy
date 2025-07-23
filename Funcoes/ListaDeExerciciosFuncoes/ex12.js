//12) Faça um algoritmo que calcule o fatorial de um número.

function calcularfatorial(num) {
  let resultado = 1
  for  (let i = num; i > 0; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(calcularfatorial(5))