// Diferença entre você ter um código no qual voce usou o callback em cima de uma função, e de você implementar sem o uso do callback(e beneficios)
// Extraindo de dentro de um array apenas as notas menores do que 7 usando as duas abordagens!
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0] //array notas, com notas variadas
// Sem callback
let notasBaixas = [] //array notasBaixas vazio
for (let i in notas) {
    if (notas[i] < 7) { 
        notasBaixas.push(notas[i]) //Se a nota for menor que 7, ela é adicionada ao array notasBaixas usando o método push().
    }
}
console.log(notasBaixas)

// Com callback
function funcaoVerifica (param1) { //função que verifica se o argumento passado retornará true ou false.
    return param1 < 7
}
notasBaixas = notas.filter(funcaoVerifica) //Aplica o método filter em um array chamado notas, passando a função funcaoVerifica como argumento. Isso irá criar um novo array  chamado "notas baixas" contendo apenas os elementos de notas para os quais a função funcaoVerifica retorna true.
console.log(notasBaixas) // imprime notasBaixas no console

//ou faz a função ali mesmo no argumsento de notas.filter(aqui

notasBaixas = notas.filter(function (param2) {
    return param2 < 7
})
console.log(notasBaixas)
