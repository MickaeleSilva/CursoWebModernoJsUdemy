const nums = [1, 2, 3, 4, 5];
// Map é um For com propósito
const resultado1 = nums.map((valor, indice, array) => {
    return `Valor: ${valor}, Índice: ${indice}, Array: ${array.join(', ')}}`;
});
console.log(resultado1);
console.log(' ')

// Dobrando números
let resultadoDobro = nums.map(function(e) {
    return e * 2;
})
console.log(resultadoDobro, nums); // original não é modificado


//Funções para passar no callback 
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', '.')}` 
console.log()

resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado2)
//obs: posso também trocar a ordem