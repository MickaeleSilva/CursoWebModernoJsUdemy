//Em JavaScript, quase qualquer valor diferente de 0, null, undefined, NaN, false ou uma string vazia ('') é considerado truthy.
let isAtivo = false //literal falso
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo) // aqui ele se torna númerico
//vamos tornar esse number em booleano!
console.log(!isAtivo)  // false
console.log(!!isAtivo) // true
console.log(!true)  // negação única
console.log(!false) // negação única
console.log(!!true) //(dupla negação): Aplica a negação duas vezes, resultando no valor booleano original.

console.log(" ")
//os verdadeiros..
console.log('os verdadeiros....')
console.log(!!3) //inteiros menos o 0
console.log(!!-1) //números negativos
console.log(!! ' ') //aspas com qualquer coisa, até o vazio
console.log(!![]) //array
console.log(!!{ }) //objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 'texto'))

console.log(' ')
//agora os falsos...
console.log('Agora os falsos..')
console.log(!!0) // o zero.
console.log(!!'') // aspas vazias (nem mesmo há espaço)
console.log(!!null)
console.log(NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // se o valor da atribuição do lado direito for falso..

console.log(' ')
console.log('Para finalizar..')
//se algumas das atribuições for verdadeira, vai dar true.
console.log(!! ('' || null || 0 || ' ') ) // "||" significa "ou"
//se eu retornar sem a negação dupla:
console.log(('' || null || 0 || 'epa') )
console.log(('' || null || 0 || '' || 123)) 
console.log(!!('' || null || 0 || 'epa'))

console.log(' ')

//Ou....||
console.log('Exemplos de utilidade com "ou" (||)')
let nomee = ''
console.log(nomee || 'Desconhecido' ) // o primeiro nome deu falso, então ele imprimirá o verdadeiro se houver um, que no caso é "desconhecido"

// Exemplo -Ou pt II
let nome = 'Lucas'
console.log(nome || 'Desconhecido') //agora que nome é true, ele vai imprimi-lo.