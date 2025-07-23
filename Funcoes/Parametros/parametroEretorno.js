// PARÂMETROS E RETORNO SÃO OPCIONAIS
console.log('valor permitido: abaixo de 20m2')
console.log(" ")

function area(largura, altura) {
    const area = largura * altura
    if (isNaN(area)) {
        return `Não sou um número: ${area}`}
    if (area > 20) {
        return `valor maior que o permitido: ${area}m2`
    } else {
        return `valor abaixo do permitido: ${area}m2.`
    }
}


console.log(area(2, 2))
console.log(area(2)) //têm um dos argumentos ausentes, resultando em NaN
console.log(area()) // têm os dois argumentos ausentes, resultando em NaN
console.log(area(1, 10, 300, 500 )) // considera apenas os dois primeiros parâmetros (1 * 10 = 10) 
console.log(area(5, 5))
