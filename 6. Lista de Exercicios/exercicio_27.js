const inverterChavesEValores = (obj) => {
  const novoObj = {}; // Criamos um novo objeto vazio para armazenar o resultado

  Object.entries(obj).forEach(([chave, valor]) => {
    novoObj[valor] = chave; // Atribuímos a chave original como valor, e o valor original como chave
  });

  return novoObj; // Retornamos o novo objeto com chaves e valores invertidos
};

const obj = { a: 1, b: 2, c: 3 };

console.log(inverterChavesEValores(obj)); // { '1': 'a', '2': 'b', '3': 'c' }
