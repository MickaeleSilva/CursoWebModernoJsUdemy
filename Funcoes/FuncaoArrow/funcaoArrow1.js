// Função comum:
let dobro = function a() {
    return `Exemplo função comum: ${2 * a}`
}
console.log(dobro(2))

// Função arrow: (usando let pois ela pode ser sobrescrevida)
dobro = (a) => { // quando o bloco de código é incluido, é necessário colocar return! se não retornará undefined!
   return  `Exemplo função arrow com bloco: ${2 * a}`
} 
console.log(dobro(2))


// A função arrow é uma função anônima, é necessário armazena-la em alguma variavel ou constante
// Uma forma mais reduzida: para funções de apenas uma linha.
dobro = a => 2 * a // return implícito
console.log('Exemplo Dobrando o PI: ', dobro(Math.PI)) // calculando o dobro do PI

// Outro exemplo:
let ola = function () {
    return 'Olá!'
}

// forma resumida:
ola = () => 'Olá' // função sem parâmetros. ATENÇÃO: é obrigatório o uso dos parentêses nessa sintaxe
//ou...
ola = _ => 'Olá' // Aqui temos o parâmetro underline, porém na hora de chamar a função você pode simplesmente não chama-lo
console.log('Chamando função Saudação sem usar argumento:', ola()) // ele retorna a função pois possui return, não fazendo uso do parâmetro