const temElementoEmComum = (arr, arr2) => {
  let novoArray = [];

  // Percorre todos os elementos do primeiro array (arr)
  for (let i = 0; i < arr.length; i++) {
    // Verifica se o elemento de arr está em arr2
    if (arr2.includes(arr[i])) {
      novoArray.push(arr[i]); // Se encontrar, adiciona ao novoArray
    }
  }

  return novoArray; // Retorna os elementos comuns
};

const verduras = ["tomate", "pimentão", "cenoura"];
const frutas = ["tomate", "abacaxi", "caju"];

console.log(temElementoEmComum(verduras, frutas)); // ['tomate']
