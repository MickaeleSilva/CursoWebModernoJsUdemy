const pessoa = {
  nome: 'Ana', // atributo: 'valor associado ao atributo'
  idade: 5,
  endereco: { //subobjeto
    logradouro: 'Rua abc',
    numero: 1000
  }
}
console.log(pessoa.nome) //ou atribuimos ela a uma variavel
//let nome = pessoa.nome
//console.log(nome)´

//ou.. método destructuring
// as duas chaves simbolizam o operador destructuring e ela fica onde ficava o identificador da variavel/constante
const { nome, idade } = pessoa //é o mesmo que dizer, 'tire o valor dos atributo citadas dentro das chaves, que pertecem (= pessoa) a pessoa'
console.log(nome, idade) // saída
const {nome: n , idade: i } = pessoa // renomeei os atributos
console.log(n, i) 
// e se eu tirar um atributo que não existe dentro do objeto?
const {sobrenome, brinquedoFavorito = true } = pessoa
console.log(sobrenome, brinquedoFavorito)

//e se eu quiser acessar os atributos logradouro e numero que estão dentro de endereço?
const { endereco: { logradouro, numero } } = pessoa // disse que endereço era dono de logradouro e numero, e depois quem era o dono de endereço (pessoa)
console.log(logradouro, numero)


//acessando um atributo que não existe
//const {conta: { agencia, num}} = pessoa
//console.log(agencia, num)

//colocando endereco (um subobjeto) dentro de um array e chamando apenas o item 1 (logradouro)
const enderecoarray = [pessoa.endereco.logradouro, pessoa.endereco.numero]
console.log(enderecoarray[1])