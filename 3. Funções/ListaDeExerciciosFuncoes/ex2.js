/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function definirForma(a, b, c) {
    if (a === b && b === c) {
        console.log('Triângulo Equilátero') 
    } else if (b === c && a !== b || a === c && b !== a || a === b && a !== c) {
        console.log('Triângulo Isósceles')
    } else if (a !== b && b !== c) {
        console.log('Triângulo Escaleno')
    }
}
definirForma(4, 2, 3)
