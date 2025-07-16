function getPreco(imposto = 0, moeda = 'R$') {
        return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}
// Chamando a função sem nenhum contexto específico
console.log(getPreco()) // NaN

//Definindo valores globalmente
global.preco = 20
global.desc = 0.1 
console.log(getPreco())
//saida: R$ 18

// Chamando getPreco() usando o contexto do objeto "produto".
console.log(produto.getPreco()); // Saída: R$ 3400

// Usando Call
const carro = { preco: 4500, desc: 0.15 }
console.log('1. ', getPreco.call(carro))
//Apply
console.log('2. ',getPreco.apply(carro))

//como os argumentos são passados: call
console.log('3. ',getPreco.call(carro, 0.17, 'USD'))
console.log('3. ', getPreco.apply(carro, [0.17, 'USD' ])) // ERRO CASO OS PARÂMETROS NÃO ESTEJAM DENTRO DE UM ARRAY!