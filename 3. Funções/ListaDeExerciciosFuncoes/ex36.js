/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

const multiplicaVetor = (vetor, numero) => vetor.map(elemento => elemento * numero);
const multiplicaVetorCondicional = (vetor, numero) => vetor.map(elemento => (elemento > 5 ? elemento * numero : elemento));

const vetor = [1, 2, 3, 4, 5, 6, 7];
const numero = 2; 

const resultado1 = multiplicaVetor(vetor, numero);
console.log(`Resultado da primeira função: ${resultado1.join(', ')}`);

const resultado2 = multiplicaVetorCondicional(vetor, numero);
console.log(`Resultado da segunda função: ${resultado2.join(', ')}`);