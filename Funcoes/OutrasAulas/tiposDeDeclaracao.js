//TESTANDO//
// 1 - Function Declaration
console.log(soma(3,4)) // antes mesmo da função ser declarada, ela pode ser chamada normalmente. Isso ocorre pois o interpretador do JS primeiro carrega as funções e deixa elas prepradas antes memsmo de rodar o código
// 2 - Function Expression
console.log(sub(3, 4)) // erro, não é possível acessar antes de iniciar a função
// 3 - Named Function Expression
console.log(multi(3, 4)) //erro, função não foi declarada 


// FORMAS DE DECLARAR UMA FUNÇÃO
// 1 - Function Declaration (Normal)
function soma(x, y) {
   return x + y
}
// 2 - Function Expression ( Função Anônima atribuida a uma variável/constante)
const sub = function (x, y) {
    return x - y
}
// 3 - Named Function Expression (A mistura entre Function Expression e Declaration)
const mult = function multi(x, y) {
    return x * y
}
//Vantagens da NFE: ao debugar o código, o nome da função aparecerá no stack
