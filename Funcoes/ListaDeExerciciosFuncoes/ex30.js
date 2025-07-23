/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/
function MaioreMenor(...numeros) {
    let max = Math.max(...numeros)
    let min = Math.min(...numeros)

    return `O maior número é ${max}. O menor número é ${min}`
    
}

console.log(MaioreMenor(23, 10, 5, 34, 1, 70, 130, 10397, 0))