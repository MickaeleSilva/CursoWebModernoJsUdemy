const esp = () => console.log(' ')

// .pop() -> não aceita argumentos = deleta o último elemento do array e pode retornar
const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa'] // a constante piloto sempre apontará para este array
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)
esp()

// .push(elemento, elemento...) = adiciona elementos ao array e retorna o comprimento do array
pilotos.push('Verstappen')
console.log(pilotos)
esp()

//.shift() -> não aceita argumentos = remove o primeiro elemento de um array e retorna ele também
pilotos.shift()
console.log(pilotos)
console.log('Elemento retirado de piloto:', pilotos.shift())
esp()

// .unshift() -> aceita argumentos = add elemento ao inicio do array | retorna o comprimento do array
pilotos.unshift('Hamilton')
console.log(pilotos)
console.log('comprimento do array agora:', pilotos.unshift())
esp()

//splice pode adicionar e remover elementos | splice(start, deleteCount, item1, item2, ...)
// .splice() | adicionando
let adicionados = pilotos.splice(2, 0, 'Bottas', 'Massa' )
console.log(pilotos)
console.log(adicionados) // ele retorna os elementos que foram removidos, como nenhum foi removido, ele retorna um array vazio
esp()

// .splice() | removendo "Massa"
let removido = pilotos.splice(3, 1)
console.log(pilotos)
console.log('removido:', removido)
esp()

//removendo com .splice()
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)
esp()

//usando .slice() => (start, end)
console.log('Pilotos:', pilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
