Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
    
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3,99)) {
        console.log('Reprovado')
    } else {    //apenas será chamado se todos os if/else if derem false como resultado
        console.log('Nota Inválida')
    }

}
imprimirResultado(10)
console.log(' ')

///Sem o método (mesmo resultado)
const imprimirResultado2 = function (nota) {
    if (nota >= 9 && nota <= 10) {
        console.log('Quadro de honra com nota:', nota)
    } else if (nota >= 7 && nota < 9) {
        console.log('Aprovado com nota:', nota)
    } else if (nota >= 4 && nota < 7) {
        console.log('Recuperação com:', nota)
    } else if (nota >= 0 && nota < 4) {
        console.log('Reprovado com:', nota)
    } else {    //apenas será chamado se todos os if/else if derem false como resultado// também pode não ser colocado na estrutura
        console.log('Nota Inválida')
    }
}

imprimirResultado2(10)
imprimirResultado2(8)
imprimirResultado2(6.5)
imprimirResultado2(2.9)
imprimirResultado2(-1)
imprimirResultado2(11)
