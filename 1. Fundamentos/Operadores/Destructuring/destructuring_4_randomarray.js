//destructuring com array dentro dos parametros de uma função
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //math.ceil(variavel) retorna pra cima o úmero mais perto do valor sugerido, ou seja, se fosse 1,6, seria 2, o math.floor(variavel), retorna o mais perto pra baixo ou seja, se fosse 1.6, daria 1
}
//aqui não é preciso por primeiro o min e depois o máximo, a estrutura de if garante que o min fique em primeiro lugar
console.log(rand([50, 40])) //ele vai realizar a troca porque 50 é maior do que 40, ficando assim, 40 min e 50 max

//passando apenas um dos dois
//passando min e deixando máximo padrão:
console.log(rand([992])) //aqui ele é processado como minimo, pois é o primeiro, e o máximo fica padrão já que nao esta citado (1000)

//passando apenas o máximo e deixando o min padrão:
console.log(rand([, 10])) //minimo padrão: 0

//passando valores padrões
console.log(rand([]))

//passando nenhum valor: typeError
///console.log(rand())