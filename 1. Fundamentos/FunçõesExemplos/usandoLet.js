//aqui vemos que os valores podem coexistir pois estão em diferentes escopos
console.log('EXEMPLO 1 ---->')

var numero = 1
console.log('fora:', numero)
{
    let numero = 2
    console.log('dentro:', numero)
}

//////

console.log(' ')
//aqui o escopo procura por uma variavel numero mas não acha, ai ele pega a do outro escopo (abrangente)
console.log('EXEMPLO 2 ---->')

var numero = 1
console.log('fora: ', numero)
 {
    let numero2 = 2
    console.log('dentro: ', numero)
 }