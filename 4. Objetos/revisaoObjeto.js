console.log("Coleção dinâmica de pares chave/valor")

const produto = new Object // função construtora 
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log("1.", produto)

delete produto.preco // acessando normalmente
delete produto['marca do produto'] // acessando com a via string pois há espaços
console.log("2.", produto) // apenas a propriedade "nome"
console.log(' ')

// Objeto mais complexo
console.log('Objeto mais complexo:')
const carro = {
    modelo: "A4", 
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 140
        }
    },
   condutores: [{              // array com dois indices objeto
        nome: 'Junior',
        idade: 19
   }, {
    nome: 'Ana',
    idade: 42
    }],
    calcularValorSeguro: function() {
        valorSeguro =  `R$ ${(5 * this.valor) / 100}`
        return valorSeguro
    }
}


 // atribuindo uma propriedade de um objeto a uma constante
const seguro = carro.calcularValorSeguro()
console.log('Seguro:', seguro)

// alterando
console.log('Numero:', carro.proprietario.endereco.numero) // saída: 140
carro.proprietario.endereco.numero = 1000
console.log('Numero novo:', carro.proprietario.endereco.numero) // saída: 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Washington Luis'
console.log('Logradouro:', carro.proprietario.endereco.logradouro) 
console.log('Objeto todo:', carro)
console.log(' ')

// deletando propriedades: 
console.log('deletando propriedades;')
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro.proprietario)
console.log(carro.condutores) // foi deletado, então dará undefined, dará um erro apenas se você tentar acessar algo dentro da propriedade que foi esxcluida, exemplo:
//exemplo: console.log(carro.condutores.length) -> TypeError: Cannot read properties of undefined (reading 'length')