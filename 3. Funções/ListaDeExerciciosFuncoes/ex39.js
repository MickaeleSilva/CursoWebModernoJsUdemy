/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/
function trocarVetor(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        throw new Error("Os vetores devem ter o mesmo tamanho.");
    }

    for (let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] + vetor2[i]; // Soma dos elementos para vetor1
        vetor2[i] = vetor1[i] - vetor2[i]; // Subtração para obter o novo valor do vetor2
        vetor1[i] = vetor1[i] - vetor2[i]; // Subtração para obter o novo valor do vetor1
    }

    return [vetor1, vetor2];
}

// Uma forma mas eficiente de troca sem variavel auxiliar
function trocarVetor(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        throw new Error("Os vetores devem ter o mesmo tamanho.");
    }

    for (let i = 0; i < vetor1.length; i++) {
        // Trocar os elementos usando desestruturação (destructuring assignment)
        [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]];
    }

    return [vetor1, vetor2];
}

console.log(trocarVetor([1, 2, 3], [4, 5, 6]));
console.log(trocarVetor([4, 5, 6], [1, 2, 3])); 
