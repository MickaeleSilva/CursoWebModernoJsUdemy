/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function lerNumero(numero) {
    let mensagem
    switch(numero) {
        case 0:
            mensagem = 'zero'
            break
        case 1:
            mensagem = 'um'
            break
        case 2:
            mensagem = 'dois'
            break
        case 3:
            mensagem = 'três'
            break
        case 4:
            mensagem = 'quatro'
            break
        case 5:
            mensagem = 'cinco'
            break
        case 6:
            mensagem = 'seis'
            break
        case 7:
            mensagem = 'sete'
            break
        case 8:
            mensagem = 'oito'
            break
        case 9:
            mensagem = 'nove'
            break
        case 10:
            mensagem = 'dez'
            break
        default: 
            mensagem = 'Número fora do intervalo'
    }
    return mensagem
}
console.log(lerNumero(4))
console.log(lerNumero(7))
console.log(lerNumero(10))
console.log(lerNumero(1430))