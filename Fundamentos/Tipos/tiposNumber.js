//Number = Numérico
const peso1 = 1.0
const peso2 = Number('2.2') //Number aqui  é uma função embutida do JavaScript usada para converter valores para números.


console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //O método Number.isInteger() Verifica se o valor de peso1 é um número inteiro 
console.log(Number.isInteger(peso2)) //O método Number.isInteger() Verifica se o valor de peso1 é um número inteiro 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log("arredondado: ", media.toFixed(2)) //função de number que limita o número de casas decimais para o número escolhido, que nesse caso é 2.
console.log(toString()) 
console.log("em binário: ", media.toString(2)) //o valor dois na função toString tranforma o valor em binário
console.log(typeof media)
console.log(typeof Number)

console.log( )

//Alguns cuidados com Number
console.log("Alguns cuidados com Numbers:")

console.log( )

console.log(7 / 0) //qualquer número dividido por 0 é infinito
console.log("10" / 2) // você pode fazer operações matemáticas, embora tenha cuidado com tipos strings
console.log("10.5" / 2) // porém precisa ser inteiro, não pode ser decimal NaN, ou seja, com vírgula!
console.log("Show!" * 2) // Outras linguagens até mesmo colcoariam a string Shows duas vezes, mas isso não funciona aqui não, já da aviso de NaN
console.log(0.1 + 0.7) // quase todas as linguagens usam essa especificação, ou seja, essa impresição.
//console.log(10.tostring()) // vc não consegue chamar diretamente o literal.função mas.. ->
console.log((10.345).toFixed(2) ) //consegue chamar o literal dentro de parenteses, e chamar a função sem obrigatoriamente ter que armazenar numa variavel pra usa-la a partir dai.
//A função toFixed() é um método nativo do JavaScript que permite arredondar um número para um número específico de casas decimais. Para arredondar um número para duas casas decimais, basta chamar o método toFixed(2).
