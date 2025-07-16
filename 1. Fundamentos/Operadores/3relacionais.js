//RELACIONAIS faz comparações: o resultado sempre será verdadeiro ou falso (true or false)

console.log('Verificar igualdades:')
//verificando se há igualdade no valor
console.log('de valor:', '1' == 1) 
console.log('de valor:', '3' == 1) 

//verificando  estritamente se há igualdade: no TIPO e de VALOR
console.log('de tipo e valor:', '1' === 1)
console.log('de tipo e valor:', '1' === '2')
console.log('de tipo e valor:', '1' === '1')

console.log(' ')

console.log('Verificar desigualdades:')
console.log('há desigualdade de valor?:', '3' != 3) 
console.log('há desigualdade de valor e/ou de tipo?:', '3' !== 3)
console.log('há desigualdade de valor e/ou de tipo?:', 3 !== 3)

console.log(' ')

console.log('Verificar se um número é maior, menor ou igual ao outro:')
console.log('3 < 2:', 3 < 2)
console.log('3 > 2:', 3 > 2)
console.log('3 <= 2:', 3 <= 2) //menor ou igual
console.log('3 >= 2:', 3 >= 2)

console.log(' ') 

console.log('comparando igualdade de valores que já possuem referência na memória distintas ou iguais')
const d1 = new Date(0) //cria uma variável d1 que armazena uma instância do objeto Date, representando o timestamp zero (1 de janeiro de 1970 00:00:00 UTC) em JavaScript.
const d2 = new Date(0) //cria uma variável d2 que armazena uma instância do objeto Date, representando o timestamp zero (1 de janeiro de 1970 00:00:00 UTC) em JavaScript.
console.log(d1 + ', ' + d2)
console.log(d1 === d2) // === significa estritamente
console.log(d1 === d1) // ele está comparando endereço de memória, (variaveis)
console.log(d1 == d2) //não precisa nem ser estritamente para ele ver que há ou não igualdade 
console.log(d1 == d1)
console.log(' ')

console.log('comparando igualdade apenas valor ou estritamente valor e tipo com variavel que armazena uma instância do objeto Date')
console.log(d1.getTime() === d2.getTime()) // getTime é number, ambos são numbers e possuem o mesmo valor então são estritamente iguais (true)
console.log(d1.getTime() == d2.getTime()) // o mesmo aqui (true)

console.log(' ')
console.log('Undefined e Null são iguais?')
//em JavaScript, null e undefined são considerados iguais em valor quando se utiliza o operador de igualdade (==). No entanto, eles são de tipos diferentes.
console.log('são iguais?:', undefined == null) //valores iguais
console.log('são estritamente iguais?:', undefined === null) //tipos diferentes

//null é um valor especial que representa a ausência intencional de um objeto ou valor.
//undefined é atribuído a variáveis que ainda não foram inicializadas ou a parâmetros de função que não foram fornecidos.

//Observação final, por via de regra, use sempre quando puder === (estritamente), para saber se ambos valor e tipo são iguais.