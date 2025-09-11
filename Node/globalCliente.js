//é precio importar para adicionar ao global
require("./global");

console.log(MinhaApp.saudacao());

//tentando alterar esse subObjeto
MinhaApp.nome = "Olá!";
console.log(MinhaApp.nome); //Global, pois o objeto esta congelado e não pode ser alterado
