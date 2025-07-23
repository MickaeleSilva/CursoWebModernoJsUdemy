/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares */

function lerVetor(...n) { 
  const pares = [];
  const impares = [];
  const contagem = {contagemPares: 0 , contagemImpares: 0 }
  
  for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            pares.push(n[i]);
            contagem.contagemPares++;
        } else {
            impares.push(n[i]);
            contagem.contagemImpares++;
        } 
    }

return `São ${contagem.contagemPares} pares: ${pares.join(', ')}.
São ${contagem.contagemImpares} impares: ${impares.join(', ')}.`;

}

console.log(lerVetor(3, 4, 5, 6, 7, 10, 123, 150, 578));