const multiplicar = (n1, n2) => {
  if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 <= 0 || n2 <= 0) {
    throw new Error("Apenas números inteiros positivos são permitidos.");
  }

  let resultado = 0;
  for (let i = 0; i < n2; i++) {
    resultado += n1; // na primeira iteração o resultado adquire o fator a ser multiplicado, e faz a soma dele até bater a quantidade de vezes, por ex: a * b, ele fará 0 + a, a+=(b vezes)
  }

  return resultado;
};

console.log(multiplicar(4, 2)); // 8
console.log(multiplicar(7, 2)); // 14
console.log(multiplicar(10, 10)); // 100
console.log(multiplicar(1, 1)); // Erro: Apenas números inteiros positivos são permitidos.
