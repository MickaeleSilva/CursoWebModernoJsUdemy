/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/


function planoDeSaude(idade) {
    const base = 100;
    const faixas = [
        { limite: 10, adicional: 80 },
        { limite: 30, adicional: 50 },
        { limite: 60, adicional: 95 },
        { limite: Infinity, adicional: 130 }
    ];

    // Encontrar a faixa etária correta
    let faixa = faixas.find(faixa => idade < faixa.limite);
    
    // Corrigi a forma de acessar o adicional corretamente
    let valor = base + faixa.adicional;

    return `Para a idade de ${idade} anos, o valor é de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}

console.log(planoDeSaude(9)); 
console.log(planoDeSaude(17));
console.log(planoDeSaude(37));
console.log(planoDeSaude(56));
console.log(planoDeSaude(87));
