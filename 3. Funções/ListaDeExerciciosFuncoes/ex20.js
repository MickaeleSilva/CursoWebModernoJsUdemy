/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function cedula(valor) {
    let x = valor;
    let notas = [];

    while (x !== 0) {
        if (x >= 100) {
            x -= 100;
            notas.push(100);
        } else if (x >= 50) {
            x -= 50;
            notas.push(50);
        } else if (x >= 10) {
            x -= 10;
            notas.push(10);
        } else if (x >= 5) {
            x -= 5;
            notas.push(5);
        } else if (x >= 1) {
            x -= 1;
            notas.push(1);
        }
    }
let count = {};
notas.forEach(item => {
    if (count[item]) {
     count[item]++;
    } else {
      count[item] = 1;
}
});
resultado = "";

for (let nota in count) {
    if (count[nota] >= 2) {
        resultado += `${count[nota]} notas de R$${nota}, `;
    } else {
    resultado += `${count[nota]} nota de R$${nota}, `;
    }
}
//remover a última vírgula e espaço extra no final da string e add um ponto final.
resultado = resultado.slice(0, -2) + '.'

return resultado

}


console.log(cedula(158))

