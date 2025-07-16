/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */
function calcularCrescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    // Verifica qual criança é inicialmente menor
    let criancaMenorAltura, criancaMaiorAltura, taxaMenor, taxaMaior;
    
    if (altura1 < altura2) {
        criancaMenorAltura = altura1;
        criancaMaiorAltura = altura2;
        taxaMenor = taxaCrescimento1;
        taxaMaior = taxaCrescimento2;
    } else {
        criancaMenorAltura = altura2;
        criancaMaiorAltura = altura1;
        taxaMenor = taxaCrescimento2;
        taxaMaior = taxaCrescimento1;
    }

    // Calcula quantos anos até a criança menor ultrapassar a maior
    let anos = 0;
    while (criancaMenorAltura < criancaMaiorAltura) {
        criancaMenorAltura += taxaMenor;
        criancaMaiorAltura += taxaMaior;
        anos++;
    }

    return anos;
}

// Exemplo de uso da função
console.log(calcularCrescimento(123, 5, 110, 4))
