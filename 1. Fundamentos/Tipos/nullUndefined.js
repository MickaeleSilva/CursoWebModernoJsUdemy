//Em resumo, null é frequentemente usado quando queremos indicar 
//explicitamente que algo não tem valor, enquanto undefined é geralmente
//usado para indicar a ausência de valor devido a declaração, retorno 
//de funções, ou outras situações em que uma variável ainda não foi 
//inicializada. Ambos são valores primitivos em JavaScript.

const a = {name: 'Teste'}
console.log(a)
const b = a // atribuindo/passando o endereço o endereço de memoria de 'a' em 'b'. a igualando as constantes.

console.log(b)
b.name = 'opa' // aqui, eu mudei o valor da propriedade name da constante a por uma constante (b)
console.log(a)
console.log(b)
//se eu mudar a partir de a, o b vai perceber a mudança e vice-versa
//a = 3 //vai dar um erro, pois não se atribui valores a uma constante

console.log(' ')
console.log('tipo primitivo:')
//porém, quando o tipo é primitivo (string, number, boolean, null, undefined, symbol)
//não há uma atribuição do endereço mas sim apenas a copia dele, que pode ser alterada:
let c = 3
let d = c // d se torna referencia
d++ //adicionei uma unidade a d apenas (agora é 4)
console.log('c, d: ', c ,'e ', d)

console.log(' ')
console.log('undefined exemplos')
//undefined
let valor //  valor não localizado
console.log(valor) //não foi atribuida nenhum valor a variavel, então é não definida.
//console.log(valor2) // aqui, valor2 não nem mesmo declarada uma variavel, e ai resulta num erro de not defined, que é diferente de undefined

//Null
valor = null //ausência de valor, porém, você mesmo esta definindo que ela não apomnta para nenhum local na memória. Ela esta vázia
//em null, você atribuiu o valor da variável com null (vazio)
console.log('null: ', valor)

//
//console.log(valor.toString()) //tentando acessar o valor de uma variavel que não aponta pra null
//então, não tente acessar variáveis que potencialmente podem ter valor nulo ou undefinido, pois vai gerar um problema.
//
console.log(' ')
console.log('exemplo 2:')

const produto = { }
console.log(produto.preco) //não há esta propriedade no objeto declarado
console.log(produto) // mas há um espaço dentro das chaves (objeto)
//agora há uma propriedade em produto chamada preco e um valor
produto.preco =  3.50
console.log(produto.preco)

console.log(' ')
produto.preco = undefined //não indicado, deixe a lingugaem definir isso.
console.log(!!produto.preco)
//delete produto.preco //deletar
console.log(produto)

console.log(' ')
produto.preco = null // sem preço
console.log(!!produto.preco) 
console.log(produto)