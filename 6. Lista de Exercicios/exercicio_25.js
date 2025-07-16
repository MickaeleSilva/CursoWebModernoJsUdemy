const encontrarPalavras = (termo, arr) => {
  const resultado = arr.filter((palavra) => palavra.includes(termo));
  return resultado.length > 0 ? resultado : ["Nenhuma palavra encontrada"];
};

console.log(encontrarPalavras("ana", ["banana", "praia", "sorvete"]));
console.log(encontrarPalavras("ana", ["lua", "praia", "sorvete"]));
console.log(encontrarPalavras("ana", ["banana", "cana", "sorvete"]));
