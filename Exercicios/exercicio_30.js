const alunos = {
  joao: [8, 7.6, 8.9, 6],
  mariana: [9, 6.6, 7.9, 8],
  carla: [7, 7, 8, 9],
};

const calcularMedias = (obj) => {
  return Object.entries(obj).map(([nome, notas]) => {
    const soma = notas.reduce((acc, val) => acc + val, 0);
    const media = soma / notas.length;
    return { nome, media };
  });
};

console.log(calcularMedias(alunos));
