//uma característica do IF e um cuidado que você precisa ter no seu código

function testeA(num) {
    if(num > 7) //sem chaves 
        console.log('teste:', num)
        console.log('Final') //final terá uma saída independente se num for verdadeiro ou não, pois o if se refere somente a ele, se ele estivesse par de chaves ai sim colocaria ele dentro do if também
}
testeA(6) //Nenhuma saída será gerada para este caso
testeA(8)


console.log(' ') // agora com chaves delimitando o bloco if


function testeB(num) {
    if(num > 7) { 
        console.log('teste:', num)
        console.log('Final') //final apenas será expresso se 'num' for true, pois esta dentro do escopo if definido dentro da função
    }
}

testeB(6)
testeB(8)

console.log(' ')


function testeC(num) {
    if(num > 7); { //o ponto e vírgula fazem estruturas de controle se desassociarem do bloco de código
        console.log('teste:', num)
    }
}

testeC(6)
testeC(8)

//Não use ponto e vírgula nas estruturas de tipo IF