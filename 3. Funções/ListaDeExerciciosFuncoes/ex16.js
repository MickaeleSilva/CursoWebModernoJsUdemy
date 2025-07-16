/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculadora(n1, operador, n2) {
    let resultado;
    switch (operador) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n1 / n2;
            break;
        default:
            resultado = 'Operação Inválida!';
    }
    return resultado;
}

console.log(calculadora(10, '+', 10)); // 20
console.log(calculadora(10, '-', 5));  // 5
console.log(calculadora(10, '*', 10)); // 100
console.log(calculadora(100, '/', 10));// 10
console.log(calculadora(10, '&', 10)); // Operação Inválida!