/* ESTRUTURA:
const numeros = [10, 20, 30];
numeros.forEach(function(currentValue, index, array) {
    console.log(`Elemento: ${currentValue}, Índice: ${index}, Array: ${array}`);
  });
*/

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
//passando função de forma tradicional
aprovados.forEach(function(currentValue, index, array) {
  console.log(`Elemento: ${currentValue}, Índice: ${index}, Array: ${array.join(', ')}`);
});
console.log(' ')

//ou com arrow function
aprovados.forEach(nome => console.log(nome))
console.log(' ')

// Função que exibe o nome do aprovado no console
const exibirAprovados = aprovado => console.log(aprovado)
// Usando forEach para iterar sobre o array e chamar a função exibirAprovados para cada elemento
aprovados.forEach(exibirAprovados)

