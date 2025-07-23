//No JavaScript, classes são, na verdade, funções especiais. 
//Quando você define uma classe usando a sintaxe da classe (introduzida no
//ECMAScript 2015 ou ES6), ela é equivalente a definir uma função construtora.

//Uma função construtora em JavaScript é uma função que é usada com o operador new 
//para criar instâncias de objetos. Ela serve como um modelo para criar 
//objetos com propriedades e métodos específicos.
// Definindo uma função construtora Pessoa
////////////////////////////////////////////////////////////////////////////////////////////////
//Neste exemplo, Pessoa é a função construtora. Quando você usa new Pessoa
//('Alice', 25), cria-se uma nova instância da função construtora Pessoa, 
//resultando no objeto pessoa1 com propriedades específicas. 
//O mesmo se aplica à criação de pessoa2. ->>>>>>>

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  };
}

// Criando instâncias (objetos) usando a função construtora
const pessoa1 = new Pessoa('Alice', 25);
const pessoa2 = new Pessoa('Bob', 30);

// Chamando o método apresentar() para cada instância
pessoa1.apresentar(); // Saída: Olá, meu nome é Alice e eu tenho 25 anos.
pessoa2.apresentar(); // Saída: Olá, meu nome é Bob e eu tenho 30 anos.


//constructor é necessária em uma classe em JavaScript. Ela é uma palavra reservada que indica o método especial utilizado para a inicialização de uma instância da classe quando é criada.
//Quando você cria uma nova instância da classe usando new, o método constructor é automaticamente chamado, e é onde você geralmente inicializa os atributos da instância
console.log(' ')
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Outro exemplo:

class Carro {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    acelerar() {
      console.log(`O ${this.modelo} está acelerando!`);
    }
  }
  
  // Criando instâncias (objetos) da classe Carro
  const carro1 = new Carro('Toyota', 'Corolla'); //intanciando
  const carro2 = new Carro('Honda', 'Civic');
  
  // Chamando métodos para cada instância
  carro1.acelerar(); // Saída: O Corolla está acelerando!
  carro2.acelerar(); // Saída: O Civic está acelerando!