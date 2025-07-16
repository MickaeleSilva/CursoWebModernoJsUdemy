/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function verificaIntervalo(...numeros) {
    let dentro = [];
    let fora = [];

    for ( let i = 0; i < numeros.length; i++ ) {
        if (numeros[i] <= 20 && numeros[i] >= 10) {
            dentro.push(numeros[i]);
        } else {
            fora.push(numeros[i]);
        }
    }

    return ` Números dentro do intervalo: ${dentro.join(', ')}
 Números fora do intervalo: ${fora.join(', ')}`;
}
console.log(verificaIntervalo(1, 5, 9, 10, 15, 18, 20, 21, 100));