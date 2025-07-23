const SalarioDoMes = (horasTrabalhadas, valorHora) => {
  let salariodomes = horasTrabalhadas * valorHora;
  return `Salário igual a ${salariodomes.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
};

console.log(SalarioDoMes(130, 7.3));
