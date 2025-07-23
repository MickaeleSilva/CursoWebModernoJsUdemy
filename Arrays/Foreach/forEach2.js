// implementando nosso próprio Foreach
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
console.log('Do professor usando forEach:')
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
})
console.log(' ');


 // meu próprio forEach
 function meuForeach2(arr, callback) {
     for (let i = 0; i < arr.length; i++) {
         callback(arr[i], i)
    }
}

console.log('Saída 1:')
// callback
meuForeach2(aprovados, function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
console.log(' ')

// com arrow function
console.log('Saída 2:')
meuForeach2(aprovados, (nome, indice) => {
    console.log(`${indice + 1}) ${nome}`);

});
