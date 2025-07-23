// concat é um método que concatena dois ou mais arrays e retorna um novo array.
const filhas = ['Valeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano') // fulno é adicionado ao array
console.log(todos) // [ 'Valeska', 'Cibalena', 'Uoxiton', 'Uesclei', 'Fulano' ]

// Outra forma de concatenar arrays: 
const teste = [].concat([1, 2], [3, 4], 5, [[6, 7]]) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
// Aqui o array [6, 7] é adicionado como um elemento do array, e não como elementos separados.
// Isso ocorre porque o array [6, 7] está dentro de outro array.
console.log(teste)

// Outra forma de concatenar arrays:
console.log(['a', 'b', 'c'].concat([1, 2], [3, 4], 5, [[6, 7]]))

//