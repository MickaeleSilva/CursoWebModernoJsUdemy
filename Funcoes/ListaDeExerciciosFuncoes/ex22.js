/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function anuidade(mesPag, valorAnuidade) {
    const taxaJuros = 0.05
    const mesesAtraso = mesPag - 1
    
    const valorFuturo = valorAnuidade * Math.pow(1 + taxaJuros, mesesAtraso)
   
    return valorFuturo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

console.log(anuidade(1, 1000))
console.log(anuidade(2, 1000))
console.log(anuidade(3, 1000))
console.log(anuidade(4, 1000))