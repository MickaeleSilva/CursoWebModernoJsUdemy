//  This dentro de uma função arrow é um this fixo, baseado no contexto no qual a função foi escrita
// Ou seja, independente do código estar sendo chamado a partir de um temporizador, o resultado vai ser como esperamos
function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
