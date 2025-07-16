// Método menos otimizado
const prod1 = {
    nome: 'Boneca',
    preco: 100
}
const prod2 = {
    nome: 'Baralho',
    preco: 60
}

// Factory Function Simples:
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}
console.log(criarPessoa())

