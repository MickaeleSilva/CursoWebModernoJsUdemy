/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

const operacoesMatematicas = (a, b) => ({
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    divisao: a / b
  });

const resultado = operacoesMatematicas(10, 5)
console.log(resultado.soma)
