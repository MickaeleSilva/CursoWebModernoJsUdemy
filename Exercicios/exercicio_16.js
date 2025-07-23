const checarAnoBissexto = (ano) => {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return `O ano de ${ano} É bissexto`;
  } else {
    return `O ano de ${ano} NÃO é bissexto`;
  }
};

console.log(checarAnoBissexto(2024));
console.log(checarAnoBissexto(2025));
console.log(checarAnoBissexto(400));
