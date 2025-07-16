
console.log('Hoisting dentro de um Var:')
console.log('a =', a) //chamando a variável let a sem ter declarado ela = undefined
var a = 2 // declarando o valor da variável
console.log('a =', a) // valor já delcarado acima, então a saída é 2

console.log(' ')
//aqui ocorre o içamento/hoisting/elevação da variavel
//o que o código faz é básicamente subir a declaração assim:
//var a //sem valor (undefined)
//console.log('a =', a)
//a = 2
//console.log('a =', a)
//em Var, ele inicia automaticamente com undefined quando não há valor
//

console.log('Hoisting dentro de Let: (comentado pois gera erro)')
//console.log('b =', b)
//let b = 3
//console.log('b =', b)
//em Let, o efeito de içamento não ocorre

//
console.log(' ') // lembre de comnetar 
console.log('Hoisting Dentro de uma Função:')
function hoistingTeste() {
    console.log('b =', b) 
}
hoistingTeste () // undefined pois a variavel foi declarada apenas após a iniciação da função
var b = 3 // declarei a variavel e seu valor.
hoistingTeste () // agora sim