const retornarMenor = (...valores) => {
  return `O menor número é: ${Math.min(...valores)}`;
};

console.log(retornarMenor(8, 3, 7, 90, 70, 30, 100));
