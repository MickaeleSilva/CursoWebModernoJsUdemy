// par nome/Valor //mesma chave, contextos diferentes
//contexto léxico 1: contexto na qual sua variavel foi definida fisicamente  no código
//identificador saudacao em contextos diferentes:

//em variável:
const saudacao = 'Opa!!'  // variavel, Identificador da variavel = valor dessa variaável

//em função:
function exec() {
    console.log('falaa')
}

//em variável novamente (mesmo identificador e mesmo contexto)
////const saudacao = 'opa'
//gera um erro


//Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        Logradouro: 'Rua Rio Claro',
        numero: 106
    }
}
  

console.log(saudacao)
exec() // mesmo nome porém escopo diferente/contexto diferente
console.log(Cliente)