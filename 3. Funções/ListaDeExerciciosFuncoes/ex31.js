/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function negativos(...numeros) {
    let negativos = []
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] < 0) {
        negativos.push(numeros[i])
        }
    }
    
return `Há ${negativos.length} números negativos`

}
console.log(negativos(2, 34, -12, 34, -45, -324))