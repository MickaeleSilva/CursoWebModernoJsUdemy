// Transforme a class em função construtora 
function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


function soma(a, b) {
    return a + b 
}
console.log(soma(5, 5))