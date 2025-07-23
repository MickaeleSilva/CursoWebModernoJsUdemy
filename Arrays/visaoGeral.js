console.log(typeof Array, typeof new Array, typeof [])
// O array é dinâmico.

// não recomendada, mas válida.
let aprovados = new Array('Bia', 'Carlos', 'Ana') // é criado uma instancia de aprovados (com const não daria certo)
console.log(aprovados)

// Criando array de forma literal
aprovados = ['Bia','Carlos', 'Ana'] // nova instancia do array "aprovados"
console.log(aprovados)
console.log('valor indice 0: ', aprovados[0])
console.log('valor indice 1', aprovados[1])
console.log('valor indice 2', aprovados[2])
console.log('valor indice 3', aprovados[3]) // se não existe este elemento, ele retorna undefined
console.log(' ')

// Forma de adicionar um novo elemento a um array existente
aprovados[3] = 'Paulo' // bom também pra substituir um elemento já existente
console.log('valor indice 3:', aprovados[3])

// Forma mais adequeada
aprovados.push('Jéssica')
console.log('valor indice 4:', aprovados[4])

console.log('aprovados até agora:', aprovados)
console.log('quantidade de elementos até agora:', aprovados.length)
console.log(' ')

// adicionando novo elemento ao array e escolhendo qual seu indice (quando não há a necessidade de por um elemento em um indice específico)
aprovados[9] = 'Rafael'
aprovados.push('Amélia') // ele vai adicionar a partir do ultimo elemento adicionado
console.log('aprovadoa lista', aprovados)
console.log('Tamanho agora:', aprovados.length)
console.log(aprovados[8] === undefined) // indice não possui elemento = udefined
console.log(' ')

// o método .sort() ordena os elementos de um array de forma crescente por padrão, modificando o array original.
aprovados.sort()
console.log(aprovados) // ordenado
delete aprovados[1] // deletando o array de indice 1 - Ana
console.log(aprovados) // Array vazio no indice 1
aprovados.sort() // ordenando novamente
console.log(aprovados) // agora há 5 espaós vazios
aprovados.push('NovoNome') // novo nome será colocado após os 5 arrays vazios
console.log(aprovados) // 
console.log(' ')
// Método .splice() : altera o conteúdo de um array removendo, substituindo ou adicionando elementos a ele. Ele modifica o array original e retorna os elementos removidos, se houver.

aprovados = ['Bia', 'Carlos', 'Ana'] // reatribuindo um novo valor a variável array
aprovados.splice(1, 1, 'Laura')
console.log(aprovados)

