//USANDO VAR EM LOOP
for (var i = 0; i < 10; i++ ) {    //- Incrementa o valor de i em 1.
    console.log(i)                 // var não tem escopo de bloco, portanto será visivel fora do mesmo.
}

console.log('i =', i ) //o valor aqui é o que fez o 'i' sair do laço. o número 10 no caso.

