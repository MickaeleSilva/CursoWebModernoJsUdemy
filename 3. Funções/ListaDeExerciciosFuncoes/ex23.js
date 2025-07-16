/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function lerNota(codigo, nota1, nota2, nota3) {
const maiorPeso = 4;
const menorPeso = 3;

if (codigo < 0) {
    console.log('Código negativo.')
    return;
}

const notas = [nota1, nota2, nota3];
const notasOrdenadas = notas.sort((a, b) => b - a);

const mediaPonderada = (maiorPeso * notasOrdenadas[0] + menorPeso * notasOrdenadas[1] + menorPeso * notasOrdenadas[2]) / (maiorPeso + 2 * menorPeso)

const situacao = mediaPonderada >= 5 ? "APROVADO" : "REPROVADO"


return `Código do Aluno: ${codigo}
Notas: ${nota1}, ${nota2}, ${nota3}
Média ponderada: ${mediaPonderada.toFixed(2)}
Situação: ${situacao}
` 
    
}
console.log(lerNota(90, 10, 10, 10))