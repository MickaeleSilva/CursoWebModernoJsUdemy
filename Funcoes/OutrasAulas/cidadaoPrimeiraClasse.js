// Funcao em JS é First-Class Object (Citizens)
// Higher-order function

// 1. Criar de forma literal
function fun1() {   // o bloco de código é obrigatório em função
    return console.log('a) Usando o Return')
}
fun1() // sem argumentos, ele gera uma saída com return


// 2. Armazenar função anônima em uma variável
const fun2 = function() { //você consegue atribuir a função anônima a uma variavel, agora ela não sera mais anônima.
  return console.log('b)', fun2)
}
fun2()

// 3. armazenar em um array, de forma direta e indireta
const array = [function (a, b) {
    return a + b }, fun1, fun2]
console.log('c)', array[0](2, 3)) // e é assim que criamos argumentos para uma função que está dentro de um array!

// 4. Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() { return 'd) Olá!!!'}
console.log(obj.falar()) // gerando saída para uma função que está em um atributo d eum objeto

// 5. Passar uma função como parãmetro para outra função
function executaFuncao(funcao, a, b) {
    const resultado = funcao(a, b)
    console.log(resultado)
}

function soma(a, b) {
    return `e) ${a + b}`
}

executaFuncao(soma, 3, 2)

// 5.1 Outro exemplo de função passada como parâmetro
function run(fun) {
    fun()
}
//transformando o parametro fun em uma função ao mesmo tempo que executo a função run
run(function() { console.log('f) Exemplo')  })


// 6. Uma função pode retornar/conter uma função
function soma2(a, b) { // função soma2 recebe a e b
    return function(c) {  // e também recebe uma função anônima com parametro         
        console.log('g)', a + b + c)
    }
    
} 
soma2(5, 5)(15)

// posso também pegar essa função e armazenar em uma variável
const c = soma2(10, 10)
c(5)
c(10)
