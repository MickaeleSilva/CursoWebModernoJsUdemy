// i = iteração
const funcs = []             //constante funcs que é um array vazio
for (let i = 0; i < 10; i++) {
    funcs.push(function() { //atribuindo o loop ao array vazio de funcs
        return i
    })
    
}
console.log(' ')

funcs[2]()
funcs[9]()

//para cada repetição, a função vai guardar o valor de i, ou seja, quando ele era 0, ele guardou o