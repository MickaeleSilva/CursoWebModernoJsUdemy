/* 19) O cardápio de uma lanchonete é o seguinte:
Código     Descrição do Produto          Preço
100         Cachorro Quente             R$ 3,00
200         Hambúrguer Simples          R$ 4,00
300         Cheeseburguer               R$ 5,50
400         Bauru                       R$ 7,50
500         Refrigerante                R$ 3,50
600         Suco                        R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function lancheCalculo(cod, quant) {
    let mensagem
    switch(cod) {
        case 100:
            mensagem = quant * 3
            break
        case 200:
            mensagem = quant * 4
            break
        case 300:
            mensagem = quant * 5.50
            break
        case 400:
            mensagem = quant * 7.50
            break
        case 500:
            mensagem = quant * 3.50
            break
        case 600:
            mensagem = quant * 2.80
            break
        default:
            mensagem = 'Produto não existente'    
    }
    return mensagem
}

console.log(lancheCalculo(100, 2))
console.log(lancheCalculo(200, 4))
console.log(lancheCalculo(300, 1))
console.log(lancheCalculo(400, 3))
console.log(lancheCalculo(500, 5))
console.log(lancheCalculo(600, 4))
console.log(lancheCalculo(900, 2))
