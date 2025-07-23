//classe é uma função
///class Produto {}
///console.log(typeof Produto)

// Função 1 - soma
//defini uma função de nome imprimirSoma com duas variaveis
console.log('sem retorno:')
function imprimirSoma(a, b)  {
    console.log(a + b)
}

imprimirSoma(10, 3)
imprimirSoma(2)// o segundo valor é undefined, vai resultar em NaN
imprimirSoma(1, 2, 3, 4) //ele só usa os primeiros dois números
imprimirSoma(   )

// função com retorno
console.log (' ')
console.log('com retorno:')
function soma(a, b = 0) { //zero aqui pode ser qualquer número
    return a + b 
}
console.log('soma com "a" e "b": ', soma(2,3))
console.log('soma apenas com "a": ', soma(2)) // como a e b são zerados, 2 é somado com 0, o que resulta nele mesmo
//
