 function quebra() {
    console.log(' ')
 }
 //////////////////////////////////////////////////
 let num1 = 1
 let num2 = 2

// forma pós fixada (prioridade menor)
num1++ // vem depois de --num1 (era 0 se torna 1)

// forma pré fixada (prioridade maior)
--num1 //vem primeiro que num++, de 1 fica 0

console.log(num1) // retorna 1 
quebra()


console.log(++num1 === num2--) // da true pq o ++num1 foi executado antes da comparação (===) e o num2-- depois da comparação, ou seja, quando ++num1 foi comparado, num2-- ainda era 2, num2-- foi apenas decrementado após a comparação
console.log('resultado:', num1 === num2) // resultado de cima
