//Se o presidente do JS fosse algo, seria a função, e o objeto seria o vice presidente!!
//Um objeto é uma estrutura de dados que armazena valores associados a chaves.
//Uma função é um bloco de código que realiza uma tarefa específica e pode ser invocada.

//função pra quebrar linha
function quebra () {
    console.log(' ')
}
////////////////////////////////////////////////////////////////////////////
console.log('1. Usando o operador new pra transformar a função objeto em um objeto:') //eu vou me mataaaa
console.log(typeof Object) //objeto é uma função no js
console.log(typeof new Object()) // a palavra-chave 'new' criou um objeto usando uma função
quebra()

console.log('2. usando o operador new pra transformar uma função em um objeto:')
const Cliente = function() {} 
console.log(typeof Cliente)
console.log(typeof new Cliente)
quebra()

console.log('3. Classe é uma função/ tranformando ela em um objeto com new:')
console.log('Informações: No JavaScript, classes são, na verdade, funções especiais. Quando você define uma classe usando a sintaxe da classe (introduzida no ECMAScript 2015 ou ES6), ela é equivalente a definir uma função construtora.')
quebra()
class Produto {}         //classe - PADRÃO ES6 2015
console.log(typeof Produto)
console.log(typeof new Produto())







/////////////////////////////////////////////////////////////////////////
quebra()
//utilizando o objeto e a função
console.log('4. Utilizando o objeto e a função:')
const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'Exemploville',
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  };
  pessoa.saudacao()
  quebra()


//testando objeto "Saudações ao Beto"
console.log('5. Objeto: Informações aluno Beto e saudações:')
  const alunoBeto = {
    nome: 'Beto',
    idade: 12,
    ano: '7º ano',
    professor: 'Pablo Escobar'
  }
console.log('informações de Beto:', alunoBeto)
//testando objeto "Saudações ao Beto"
function  comprimentos () {
    console.log('Olá, tudo bem,', alunoBeto.nome + '?')
}
comprimentos()
