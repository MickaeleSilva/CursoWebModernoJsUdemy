// Comparando this em função comum e arrow

let comparaComThis = function (param) {
console.log(`Função comum: ${this === param}`)
}
comparaComThis(global) // global é estritamente igual a this nesse caso: true

//passando o obj como sendo agora o this para a chamada dessa função
const obj = {}
comparaComThis = comparaComThis.bind(obj) // fazendo o vinculo entre a função "comparaComThis" e obj
comparaComThis(global) // false
comparaComThis(obj) // true
console.log(' ')


// Agora com ARROW FUNCTION
let comparaComThisArrow = param => console.log(`Função Arrow: ${this === param}`)
comparaComThisArrow(global) //false
//percebemos que "this" é estritamente igual a global na função comum, porém na função arrow isso não é verdairo
comparaComThisArrow(module.exports) // true - único this 


// Usando bind dentro de uma função arrow para ver se muda a refêrencia do this
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)// no arrow function, o this ponta para o objeto na qual a função foi ESCRITA, você NÃO consegue alterar esse this. Ele não vai apontar para o objeto que você tentou referenciar
comparaComThisArrow(module.exports) //finalmente, ele continua apontando para module.exports