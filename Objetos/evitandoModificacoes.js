//Object.preventExtensions : previne que o seu objeto seja extendido(aumentar o número de atributos deste objeto) você pode até excluir atributos e modifica-los, mas adicionar mais não.
const produto = Object.preventExtensions({
    nome: 'lápis', preco: 1999, tag: 'promoção'
})

console.log('É extensível?:', Object.isExtensible(produto)) // verificando 
produto.nome = 'borracha' // adicionando um novo valor a um atributo- permitido
produto.descricao = 'Escolar Branca - Faber Castell' // tentando adicionar um novo atributo - não permitido
delete produto.tag // é possível deletar, Diferente de Object.seal e Object.freeze que não permitem adicionar nem deletar
console.log(produto)
console.log(' ')


//Object.seal: impede a adição e deleção de propriedades, mas permite modificá-las. 
const pessoa = Object.seal({nome: 'Juliana', idade: 35, corCabelo: 'preto'})
//ou também, cria o objeto e -> Object.seal(pessoa)
console.log('Está selado?:', Object.isSealed(pessoa))
pessoa.nome = 'Maria' // modificando atributo existente - permitido
pessoa.altura = 1.54 // adicionando novo atributo - não permitido
delete corCabelo // excluindo um atributo - não permitido
console.log(pessoa)
console.log(' ')

//Object.freeze: Não permite adicionar, remover ou modificar propriedades do objeto.(valores constantes)
const carro = { modelo: 'Sedan', ano: 2020 }
Object.freeze(carro)

carro.ano = 2015;         // Tentativa de modificar uma propriedade existente (ignorada)
carro.cor = 'vermelho';   // Tentativa de adicionar uma nova propriedade (ignorada)
delete carro.modelo;      // Tentativa de deletar uma propriedade (falha)
console.log(carro);       // Saída: { modelo: 'Sedan', ano: 2020 }