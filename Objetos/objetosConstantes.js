// pessoa -> 123(endereço) -> {...}
const pessoa = {nome: 'João' }
pessoa.nome = 'Pedro'
console.log('teste 1: ', pessoa)
// pessoa <- {...} -> 456 -> {...}
// pessoa = { nome: 'Ana' } -> gera um problema, pois não se pode atribuir novamente para a contante pessoa um outro objeto

// Congelando o objeto (tornando-o constante)
Object.freeze(pessoa) // uma vez que o objeto esta congelado, você não consegue mais modificar nele.

// Após o congelamento não será possível:
pessoa.nome = 'Maria' // Modificar o valor de um atributo
pessoa.endereço = 'Rua ABC' // Adicionar um novo atributo a este objeto
delete pessoa.nome // Deletar um atributo

console.log('teste 2:', pessoa.nome) //sairá 'Pedro', nenhuma modificação foi realizada a partir da linha 10.
console.log('teste 3:', pessoa)

// Ou seja:  Definir um objeto como constante (const) impede que a variável seja reatribuída a um novo valor, mas não impede a modificação das propriedades do objeto, quem faz isso é o método estático Object.freeze().
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log('teste 4:', pessoaConstante)