//Aula de Tipagem: String

console.log("--Método charAT(number)-- ")

//Você pode delimitar uma string com aspas duplas e asplas únicas
const escola = "Cod3r"


console.log("resultado:", escola.charAt(4)) 
//charAt(posição em número) Retorna o caractere em uma localização específica em uma String.
console.log("resultado vazio:", escola.charAt(5))
//como não há uma letra na posição 4 e nem 5, ele da um erro (r)
console.log(" ")

//ele retorna o número do índice porém em formato da tabela Unicode, 51 é igual a 3 na Unicode(em html)
console.log("1:", escola.charCodeAt(3))

//agora se quer descobrir em qual índice está o dado que quer pedir, fazemos assim:
console.log("2:", escola.indexOf('3'))

//agora vamos selecionar indices específicos
console.log("3:", escola.substring(1)) //foi do 1 até o final
console.log("4:", escola.substring(0, 3)) //aqui ele pediu pra iniciar do indice 0 e armazenar 3 caracteres

//concatenando..
console.log("5:", "Escola".concat(escola).concat("!"))

//trocando todos os números da string por "e" de forma simples
console.log("6:", escola.replace(3, 'e'))

//trocando todos os números da string por "e" em Rejax
console.log("7:", escola.replace(/\d/, 'e'))

//subsituir todas as letras e digitos pela letra "e" (g é flag global)
console.log("8:", escola.replace(/\w/g, 'e'))

//converter string em um array
console.log('9:', 'Ana,Maria,Pedro'.split(','))

//com Rejax
console.log('10:', 'Ana,Maria,Pedro'.split(/,/))
