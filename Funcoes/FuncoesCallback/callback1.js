//Exemplo 
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice, arrayCompleto) {
    console.log(`${indice + 1}. ${nome} de ${arrayCompleto}`)
}

fabricantes.forEach(imprimir) //ForEach é uma função callback de fabricantes, e fabricantes é um array.

console.log(` `)

fabricantes.forEach(function(a) { //aqui, temos apenas 1 parametro, que correspondera ao cada elemento de fabricantes, se houvesse um 2 parametro, corresponderia ao indice dele no array, e se houvesse um terceiro, ao array todo.
    console.log(`agora apenas com o primeiro parâmetro(elemento): ${a}`)
})