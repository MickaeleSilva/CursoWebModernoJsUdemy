/* 10) Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
ou false. */


    function verifica(numero) {
        let numerodiv = numero / 3
        if (Number.isInteger(numerodiv)) {
            return true
        } else {
            return false
        }
    }

console.log('9: ', verifica(9))
console.log('10:', verifica(10))
console.log('18:', verifica(18))
console.log('324.6:', verifica(324.6))
console.log('51:', verifica(51))
