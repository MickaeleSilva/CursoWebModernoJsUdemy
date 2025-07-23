//EXEMPLOS DE FUNÇÃO ANÔNIMA

const soma = function (x, y)  {    //função que retorna uma soma
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { //o terceiro parâmetro é uma função que tem como padrão a função soma(caso não haja argumento nela)/ tmb seria possp
    console.log(operacao(a, b)) // usando essa funcao que está no parametro `operação` e definindo que os parâmetros x e y agora são a e b. Ou seja, da pra por um parâmetro em outro parâmetro
}

imprimirResultado(5, 5)
imprimirResultado(5, 5, soma) //passando a função soma diretamente como o terceiro argumento para a função 
imprimirResultado(5, 5, function (x, y) { return x - y} ) //passando função anônima diretamente para uma outra função, x e y equivalem a "a e b"
imprimirResultado(5, 5, (x, y) => x * y) //agora com arrow function: manipulando os parâmetros de "soma" novamente


//Função anônima dentro de um objeto
const pessoa = {
    falar: function () {  // que também pode ser: falar() {...
        console.log('opa!')
    }
}
pessoa.falar()
 