/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos */
const progressaoAritmetica = (n, a1, r) => {
    let termos = [];
    let soma = 0;
    
    for (let i = 0; i < n; i++) {
        let termo = a1 + i * r;
        termos.push(termo);
        soma += termo;
    }
    
    console.log(`PA = Termos: ${termos.join(', ')}`);
    console.log(`PA - Soma: ${soma}`);

}

const progressaoGeometrica = (n, a1, r) => {
    let termos = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        let termo = a1 * Math.pow(r, i);
        termos.push(termo);
        soma += termo;
    }    

    console.log(`PG - Termos: ${termos.join(', ')}`);
    console.log(`PG - Soma: ${soma}`);
}

const n = 5;  // Número de termos
const a1 = 2; // Primeiro Termo
const r = 3;  // Razão

progressaoAritmetica(n, a1, r);
progressaoGeometrica(n, a1, r);
