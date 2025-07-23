function quebra(){
    console.log(' ')
}
//operadores aritméticos: envolvem dois operadores, por mais somas que houver kkk, então é meio que binário
const [a, b, c, d] = [3, 5, 1, 15] // destructuring
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = 11 % a          //para descobrir o resto de uma divisão
const expressaomodulo = 1 % 2 // é uma expressão pra verificar se um número é par ou ímpar, se for igual a 0 é par, se for 1, é ímpar (estrutura: numero % 2)

console.log('Soma:', soma)
console.log('Subtração:', subtracao)
console.log('Multiplicação:', multiplicacao )
console.log('Divisão:', divisao)
console.log('Módulo/Resto de uma divisão:', modulo)
console.log('expressão pra saber se é par ou ímpar:', expressaomodulo)
console.log('resultado da divisão com valor negativo (unário):', -divisao)