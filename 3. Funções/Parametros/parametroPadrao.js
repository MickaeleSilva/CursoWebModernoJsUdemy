// estratégia 1 para gerar valor padrão // mais famosa
function soma1(a, b, c) {
a = a || 1
b = b || 1 // se não houver argumentos, eles terão 1 como valor padrão!!
c = c || 1
return `A soma de ${a} + ${b} + ${c} = ${a + b + c}`
}

console.log('a)', soma1()) // todos 1
console.log('b)', soma1(3)) // 3 + 1(padrão) + 1(padrão)
console.log('c)', soma1(3, 2)) // 3 + 2 + 1(padrão)
console.log('d)', soma1(5, 5, 5)) // 5 + 5 + 5
console.log(' ')


// estratégia 2, 3 e 4 patra gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1   //usando operador ternário: se 'a' não for undefined use a, se for, passe o valor padrão (1)
    b = 1 in arguments ? b : 1    // b é indice 1 em arguments? se sim pegue 'b', se não, passe o valor padrão (1)
    c = isNaN(c) ? 1 : c // c é NaN? se sim passar o valor padrão (1) se não passar 'c'
    return `A soma de ${a} + ${b} + ${c} = ${a + b + c}`
}
console.log('a)', soma2())
console.log('b)', soma2(5, 5, 5))
console.log('c)', soma2(5))
console.log('d)', soma2(undefined, 5, 5))
console.log('e)', soma2(5, 5, 'a'))
console.log('f)', soma2(0, 0, 0))
console.log(' ')



//valor padrão do es2015  Estratégia nova --> melhor pra este contexto de algoritmo
function soma3(a = 1, b = 1, c = 1) {
    return `A soma: ${a} + ${b} + ${c} = ${a + b + c} `
}

console.log('a)', soma3())
console.log('b)', soma3(5))
console.log('c)', soma3(5, 5, 5))
console.log('d)', soma3(0, 0, 0))


console.log(' ')

