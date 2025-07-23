/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/
let vetorInteiro =  [1, 2, 3, 4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [10.3, 13.5, 3.2, 5.10]

let resultado1 = vetorInteiro.concat(vetorString, vetorDouble);
let resultado2 = [].concat(vetorInteiro, vetorString, vetorDouble);

console.log(`resultado 1: ${resultado1.join(', ')}
resultado 2: ${resultado2.join(', ')}
`)