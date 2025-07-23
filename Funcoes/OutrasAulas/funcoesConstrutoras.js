function Carro(velocidadeMaxima = 200, delta = 5) { // Parâmetros recebendo valores padrões 
    // atributo privado (que pertence apenas ao escopo dessa função Carro)
    let velocidadeAtual = 0
    //método público a partir da palavra reservada this
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) { // se a velocidade atual + delta for menor ou igual a velocidadeMaxima 
            velocidadeAtual += delta // a nova velocidadeAtual será = velocidadeAtual + delta, mostrando o valor final em velocidadeAtual
        } else {
            velocidadeATual = velocidadeMaxima // se ultrapassar a velocidadeMaxima (200 -padrão-) a velocidadeAtual terá 200 como valor
        }
    }
    //método público 
    this.getVelocidadeAtual = function () {
        return velocidadeAtual //retornando a velocidadeAtual
    }
}

// Criando novas instâncias: 
// Uno
const uno = new Carro //aqui nenhum argumento foi passado, ou seja, os valores padrões dos parametros serão usados aqui
uno.acelerar() // da 5, pois velocidadeAtual = 0 + 5 (velocidadeAtual + delta)
console.log("uno 1:", uno.getVelocidadeAtual()) // saída 5
uno.acelerar() // da 10, pois velocidadeAtual é 5, 5 + 5(delta) = 10
console.log("uno 2:", uno.getVelocidadeAtual()) // saída 10
console.log(" ")

// Ferrari
const ferrari = new Carro(350, 20)
ferrari.acelerar() // 0 + delta(20) = 20
ferrari.acelerar() // 20 + 20 = 40
ferrari.acelerar() // 40 + 20 = 60
console.log("Ferrari 3:", ferrari.getVelocidadeAtual()) // saída: 60

console.log(typeof Carro)
console.log(typeof ferrari)

//Obs: A função funciona como um molde, e a partir desse molde, você pode criar quantos objetos você quiser, e obviamente, o dado interno daquela função pertence a cada um desses objetos 
// o This torna o elemento público