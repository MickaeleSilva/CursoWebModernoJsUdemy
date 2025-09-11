const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios"); // importando axios

//axios.get(url).then((response) => {
//const todosFunc = response.data;
//  console.log(todosFunc);
//});

//Desafio: pegar a mulher chinesa com o menor salário

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const desafio = funcionarios
    .filter((g) => g.genero === "F")
    .filter((p) => p.pais === "China")
    .reduce((menor, atual) => {
      // Encontra a que tem o menor salário
      return atual.salario < menor.salario ? atual : menor;
    });
  console.log(desafio);
});
