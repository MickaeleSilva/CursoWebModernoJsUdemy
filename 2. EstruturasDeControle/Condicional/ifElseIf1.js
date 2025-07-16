const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)     // true
imprimirResultado(4)      // true
imprimirResultado('Epa!') // false - cuidado!!!!