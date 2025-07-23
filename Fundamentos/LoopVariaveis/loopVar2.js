// i = iteração
const funcs = []             //constante funcs recebe array vazio
for (var i = 0; i <10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
console.log(i)
funcs[2]()
funcs[8]()

//var não tem escopo de bloco então vai ser 10.