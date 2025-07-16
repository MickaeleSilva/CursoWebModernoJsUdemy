function soma() { // utiliza o objeto arguments para acessar os argumentos passados para a função, mesmo que eles não sejam declarados nos parâmetros.
    let soma = 0
    for(i in arguments) { // quando nenhum parâmetro está passado esse array arguments está vazio
        soma += arguments[i] 
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 2, 2))
console.log(soma(5, 5, 'teste'))
console.log(soma('a', 'b', 'c'))