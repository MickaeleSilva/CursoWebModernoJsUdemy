//função rand que vai retornar um número aleatório
//vamos passar pra essa função dois atributos dentro de um operador destructuring
//estar dentro de chaves significa que o objeto será passado para a função e dentro da função sera tirado ambos juntos os dois atributos min e max. sem uso da notação ponto
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//usando min e max padrão: 0 e 1000
console.log(rand({}))

//estabelecendo min e máx
const obj = { max: 50, min: 40}//gerando valores randomicos entre 40 e 50
console.log(rand(obj))

//há também a possiblidade de passar o valor de min ou apenas de máximo, o que não for passado ele usa o valor padrão:
console.log(rand({ min: 955 })) //o maximo ele pega por padrão (1000)

//passando número randomico sem objeto: erro
//console.log(rand())