//Isso cria uma constante chamada prod1 que é um objeto vazio em JavaScript.
const prod1 = {} 

//a primeira propriedade é nome, e o valor atribuido a ela é celular Ultra Mega 
prod1.nome = 'celular Ultra Mega' 
// a segunda propriedade é preço, e nela está o valor: 4998.90
prod1.preco = 4998.90 // a segunda é preço

// outra forma de declarar uma propriedade
prod1 ['Desconto legal'] = 0.40 

//saída
console.log(prod1)

console.log(' ')

//Notação literal, ja criando a chave valor dentro da própria declaração do objeto:
const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90
}
console.log(prod2)

console.log(' ')

//Objeto dentro de objeto + um array
const pessoa = {
    nome: 'Maria',
    idade: 25,
    endereco: { //outro objeto declarado
        numero: 1833,
        cidade: 'São Paulo'
    },
    contatos: { //outro objeto declarado
        telefone: 11991637472,
        emails: { //um objeto de emails dentro do objeto de contatos dentro do objeto pessoa
           email1: 'maria@hotmail.com',
           email2: 'maria22@gmail.com'
                }
              },
    hobbie: ['leitura', 'caminhada', 'musica']

};
   //saídas
console.log(pessoa)
console.log('um dos hobbie de maria: ', pessoa.hobbie[2])
console.log('email1: ', pessoa.contatos.emails.email1)