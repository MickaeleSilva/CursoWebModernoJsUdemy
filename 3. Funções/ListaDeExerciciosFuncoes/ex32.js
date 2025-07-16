/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function mediaArit(...numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    const media = soma / numeros.length;
    return media;
}
console.log(mediaArit(10, 20, 30, 40));