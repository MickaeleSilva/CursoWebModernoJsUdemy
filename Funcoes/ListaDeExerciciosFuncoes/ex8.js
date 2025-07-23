/* Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

function registrarPontuacoes(pontuacoes) { // Função que registra as pontuações
    let melhorPontuacao = pontuacoes[0]; // Inicializa a melhor pontuação como a pontuação do primeiro jogo
    let piorPontuacao = pontuacoes[0]; // Inicializa a pior pontuação como a pontuação do primeiro jogo
    let recordes = [0, 0]; // Inicializa um array para armazenar o número de recordes batidos e o número do pior jogo

    for (let i = 1; i < pontuacoes.length; i++) { // Loop que percorre as pontuações a partir do segundo jogo
        if (pontuacoes[i] > melhorPontuacao)  { // Se a pontuação atual for maior que a melhor pontuação até agora
            melhorPontuacao = pontuacoes[i]; // Atualiza a melhor pontuação
            recordes[0]++; // 
        } else if (pontuacoes[i] < piorPontuacao) { // Se a pontuação atual for menor que a pior pontuação até agora
            piorPontuacao = pontuacoes[i]; // Atualiza a pior pontuação
            recordes[1] = i; // Atualiza o número do pior jogo
        }
        
    }

    return recordes; // Retorna o array com o número de recordes batidos e o número do pior jogo
}
// Exemplo de uso
const pontuacao = [10, 5, 20, 20, 4, 5, 2, 25, 1] //criando const com array com nome igual ao parametro da função
const [recorde, piorJogo] = registrarPontuacoes(pontuacao)
console.log("Número de vezes que bateu o recorde:", recorde)
console.log(`O pior jogo foi o ${piorJogo + 1}`) // Adicionando 1 pois os índices começam em 0

