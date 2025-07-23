/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano     Aumento
  A         10%
  B         15%
  C         20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumento(plano, salarioAtual) {
let resultado
switch(plano) {
    case 'A':
        resultado = salarioAtual * 1.10 // fazendo assim calculamos a porcentagem e já calculamos o aumento
        break
    case 'B':
        resultado = salarioAtual * 1.15
        break
    case 'C':
        resultado = salarioAtual * 1.20
        break
    default:
        resultado = 'Plano Inválido'
    }
return resultado
}

console.log(aumento('A', 1000))
console.log(aumento('B', 1000))
console.log(aumento('C', 1000))
console.log(aumento('D', 1000))