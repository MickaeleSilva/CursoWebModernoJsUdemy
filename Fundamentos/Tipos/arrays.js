//Array - básico

const valores = [7.7, 8.9, 6.3, 9.2]
console.log('teste 1:', valores[0], valores [3])

//e se não houver valor no indice indicado?

console.log('teste 2:', valores[4]) //ele resulta em undefined


//adicionando um valor ao indice de uma variavel
valores [10] = 10
console.log('teste 3:', valores) //adicionara o número 10 no indice 10, pulando 6 items

//para acessar a quantidade de elementos em um array...
console.log('teste 4:', valores.length)
console.log(' ')

//podemos misturar várias coisas em um array, mas não é indicado... é indicado um array mais hemogêneo...
valores.push({id:3}, false, null, 'teste')
console.log('método push para adicionar valores a um array', valores)

console.log(' ')
//type of
console.log('typeof: ', typeof valores)