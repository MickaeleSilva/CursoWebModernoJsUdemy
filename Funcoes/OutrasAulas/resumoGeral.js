// Função em Javascript é first-Class Object (Citizens)
// Função pode ser tratada como um dado
// Higher-order function
function quebra(){
  console.log(' ')
}
///////////////////////////////////////////////////////////////////////////////////
// 1. ARMAZENAR EM VARIÁVEIS
const minhaFuncao = function() {
  console.log('Olá, mundo!');
  };
quebra()

// 2. PASSAGEM COMO ARGUMENTOS: Função que recebe outra função como parâmetro: Função que recebe outra função como parâmetro
function executaOperacao(operacao, a, b) {
  return operacao(a, b);
}

function soma(x, y) {
  return x + y;
}

function subtracao(x, y) {
  return x - y;
}

function multiplicacao(x, y) {
  return x * y;
}

function divisao(x, y) {
  return x / y;
}

console.log('Soma:', executaOperacao(soma, 5, 3))          // Saída: 8
console.log('Subtração:', executaOperacao(subtracao, 8, 3))      // Saída: 5
console.log('Multiplicação:', executaOperacao(multiplicacao, 4, 2))  // Saída: 8
console.log('Divisão:', executaOperacao(divisao, 10, 2))        // Saída: 5
quebra()

//3. FUNÇÕES RETORNANDO OUTRAS FUNÇÕES:
function retornaFuncao() { //função que não aceita argumentos (que também é o mesmo que uma função sem parametros)
    return function() {    //retornando função sem nome (anônima) e que não aceita argumentos e que tem como return outra função anonima que nãoa ceita argumentos
    console.log('retorno de funções: Função retornada') //corpo dessa subfunção
                }
    }
    const novaFuncao = retornaFuncao() //novaFuncao é uma variável que agora armazena a função retornada por retornaFuncao.
    novaFuncao() // agora novaFunção é: function() presente no return de retornaFuncao
  // e agora ela invoca a função armazenada em novaFuncao, resultando na exibição de "Função retornada" no console.
quebra()

//4. ARMAZENAMENTO EM ESTRUTURAS DE DADOS: (como arrays e objetos)
function nomeFuncao1() {
  console.log("Eu sou a função 1")
}

function nomeFuncao2() {
  console.log("Eu sou a função 2")
}

const arrayDeFuncoes = [nomeFuncao1, nomeFuncao2];
arrayDeFuncoes[0]()
arrayDeFuncoes[1]()

quebra()

//CRIAR FUNÇÕES DINAMICAMENTE
function criaFuncao(nome) {
  return function() {
  console.log(`Olá, ${nome}!`);
    }
  }
  const saudacao1 = criaFuncao('João');
  saudacao1();