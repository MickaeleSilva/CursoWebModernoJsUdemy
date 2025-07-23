// Como funciona a Herança em Classe: criando 3 classes e o relacionamento de herança entre elas

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // esta é a forma no ambito de sintaxe de classe para definir que uma determinada classe tem outra classe como protótipo/ ou que uma determinada função gerada a partir daquela classe terá como protótipo terá uma outra função gerada a partir de outra classe.
    constructor(sobrenome, profissao = 'professor') { // profissão padrão caso não for passada
        super(sobrenome) // forma de chamar a funcão construtora/construtor da super classe (protótipo de pai = Avô)
        this.profissao = profissao

    }
}

class Filho extends Pai {
    constructor() {
        super('Silva', 'Programador')
    }
}

const filho = new Filho()
console.log(filho)


//////////////////////////////////////////////////////////////////////////////////////
// Outro Exemplo : 
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log('Som do animal');
  }
}


class Cachorro extends Animal {
  constructor(nome, raca) {
    // Chama o construtor da classe pai (Animal)
    super(nome);
    this.raca = raca;
  }

  fazerSom() {
    // Chama o método fazerSom da classe pai
    super.fazerSom();
    console.log('Latido');
  }
}


// Criando uma instância de Cachorro
const meuCachorro = new Cachorro('Rex', 'Labrador');
meuCachorro.fazerSom(); // Output: Som do animal
                        //         Latido

console.log(meuCachorro.nome); // Output: Rex
console.log(meuCachorro.raca); // Output: Labrador
