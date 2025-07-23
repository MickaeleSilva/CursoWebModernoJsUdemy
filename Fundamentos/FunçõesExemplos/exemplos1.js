//armazenando uma funcao em uma variavel
const imprimirMulti = function (a, b = 0) {
    console.log(a * b)
}

imprimirMulti(2, 10)


// Diminuindo a sintaxe
// Função arrow em uma variável

const multi = (a, b) => {
    return a * b
}

console.log(multi (3, 10))

//retorno implícito
const multip = (c, d)  => c * d // a seta substitui o corpo e o "function"
console.log(multip(10, 10))
//

//imprimindo string
const imprimir2 = a => console.log(a)
imprimir2('olá', 'tudo bem?')

const imprimir3 = (a, b) => console.log(a, b)
imprimir3('olá', 'tudo bem')

