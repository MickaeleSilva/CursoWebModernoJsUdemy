// Cenário 1
console.log('Cenário 1:')
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //Arredondando pra baixo
        case 10:
        case 9:
            console.log('Quadro de Honra com:', nota)
    }
}
imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(11) // não tem saída para este

console.log(' ')

// Cenário 2
console.log('Cenário 2:')
const imprimirResultado2 = function (nota) {
    switch (Math.floor(nota)) { //Arredondando pra baixo
        case 10:
            console.log('Quadro de Honra com:', nota) 
        case 9:
            console.log('Quadro de Honra com:', nota) //repetição
    }
}
imprimirResultado2(10)
imprimirResultado2(9)

console.log(' ')

// Cenário 3 (usando break para evitar repetições)
console.log('Cenário 3:')
const imprimirResultado3 = function (nota) {
    switch (Math.floor(nota)) { //Arredondando pra baixo
        case 10:
            console.log('Quadro de Honra com:', nota)
            break
        case 9:
        console.log('Quadro de Honra com:', nota)
    }
}
imprimirResultado3(10)
imprimirResultado3(9)

console.log(' ')

// Cenário 4
console.log('Cenário 4:')
const imprimirResultado4 = function (nota) {
    switch (Math.floor(nota)) { //Arredondando pra baixo
        case 10: // pode ser escrito
        case 9:  // <<<< assim
            console.log('Quadro de Honra com:', nota)
            break
        case 8: case 7: // ou pode ser escrito assim
            console.log('Aprovado com:', nota)
            break
        case 6: case 5: case 4:   //obs: não se pode colocar números com decimais(quebrados) ou intervalos quando se faz uso de case
            console.log('Recuperação com:', nota)
            break
        case 3: case 2: case 1:
            console.log('Reprovado com:', nota)
        break
        default: // qualquer coisa diferente disso
            console.log('Nota Inválida')
         
        }
}
imprimirResultado4(10)
imprimirResultado4(9)
imprimirResultado4(8)
imprimirResultado4(7)
imprimirResultado4(6)
imprimirResultado4(5)
imprimirResultado4(4)
imprimirResultado4(3)
imprimirResultado4(2)
imprimirResultado4(1)
imprimirResultado4(0)       // inválido 1
imprimirResultado4('nota')  // inválido 2
imprimirResultado4('')      // inválido 3
imprimirResultado4(-45)     // inválido 4
imprimirResultado4(2.5)     // inválido 5

console.log(' ')

// Cenário 5
console.log('Cenário 5: Sintaxes não suportadas e saídas entre os cases')
const imprimirResultado5 = function (nota) {
    switch (Math.floor(nota)) { //Arredondando pra baixo
        case 3, 2, 1, 0: //Sintaxe de separação por vírgula não suportada, ele considera apenas o último número
            console.log('Reprovado com:', nota)
            break
        case 10-8: // Sintaxe de intervalo não suportada , não processa nada
            console.log('Reprovado com:', nota)
            break
        case 4.5: // Sintaxe de decimal não suportada
            console.log('número quebrado:', nota)
            break
        default: 
            console.log('Nota Inválida')
        }
        console.log('fim!')
    }
imprimirResultado5(1)   // Sintaxe não suportada
imprimirResultado5(10)  // Sintaxe não suportada
imprimirResultado5(4.5) // Sintaxe não suportada