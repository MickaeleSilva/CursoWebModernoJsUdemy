const despesasTotais = (arr) => {
  const valorTotal = arr.reduce((soma, despesa) => soma + despesa.preco, 0);
  return valorTotal;
};

const despesas = [
  { nome: "Cinema", categoria: "Entreterimento", preco: 100 },
  { nome: "Restaurante", categoria: "Gastronomia", preco: 200 },
  { nome: "Academia", categoria: "Saúde", preco: 140 },
  { nome: "Aluguel", categoria: "Moradia", preco: 1800 },
];

console.log(despesasTotais(despesas));
