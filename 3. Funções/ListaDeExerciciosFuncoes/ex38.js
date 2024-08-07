/* 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

function imparesEntre(inicio = 0, fim = 100) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio] // Troca os valores se  o início for maior que fim
    }

    let impares = []
    for (i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
        impares.push(i)
        }
    }

    return `os impares entre ${inicio} e ${fim} são: ${impares.join(', ')}.`
}

console.log(imparesEntre())