//Estrutura de Controle (If) dentro de uma função

//A
function soBoaNoticia (nota) {
    if(nota >= 7) {
        console.log('a) Parabéns, você foi aprovado com ' + nota )  //+ aqui é uma concatenação
    }

}
soBoaNoticia(7.1)
soBoaNoticia(6.9)

//B : executando if se o valor for true
function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('b) É verdade...' + valor)
    }
}
seForVerdadeEuFalo()          // undefined é algo falso pela regra de boolean
seForVerdadeEuFalo(null)      // false
seForVerdadeEuFalo(undefined) // false
seForVerdadeEuFalo(NaN)       // false
seForVerdadeEuFalo('')        // false
seForVerdadeEuFalo(0)         // false
seForVerdadeEuFalo(true)      // true
seForVerdadeEuFalo(-1)        // true
seForVerdadeEuFalo(' ')       // true
seForVerdadeEuFalo('?')       // true
seForVerdadeEuFalo([])        // true: um array vazio é um valor verdadeiro
seForVerdadeEuFalo([1, 2])    // true: um array com elementos é um valor verdadeiro
seForVerdadeEuFalo({})        // true: um objeto vazio é verdadeiro


