function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // Math.random é um método embutido que gera um número de 0 a 1 // esse cálculo dá o valor máximo se random retornar 1 e minimo se random retornar 0
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')