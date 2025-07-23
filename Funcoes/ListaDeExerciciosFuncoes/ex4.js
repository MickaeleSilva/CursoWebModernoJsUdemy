// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function divResto(dividendo, divisor) {
    let resultado = {
        divisao: dividendo / divisor,
        resto: dividendo % divisor
    }
      return resultado
}

console.log(divResto(15, 2))