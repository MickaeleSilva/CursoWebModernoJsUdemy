/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
const verificaDia = function (dia) {
    let nomeDoDia = dia
    switch (nomeDoDia) {
        case 1: case 8: case 15: case 22: case 29:
            nomeDoDia = "Domingo"
            break;
        case 2: case 9: case 16: case 23: case 30:
            nomeDoDia = "Segunda-Feira"
            break; 
        case 3: case 10: case 17: case 24: case 31:
            nomeDoDia = "Terça-Feira"
            break;
        case 4: case 11: case 18: case 25:
            nomeDoDia = "Quarta-feira"
            break; 
        case 5: case 12: case 19: case 26:
            nomeDoDia = "Quinta-Feira"
            break;
        case 6: case 13: case 20: case 27:
            nomeDoDia = "Sexta-Feira"
            break;
        case 7: case 14: case 21: case 28:
            nomeDoDia = "Sábado"
            break;
        default:
            nomeDoDia = "Dia inválido"
    }

    return nomeDoDia
}

console.log(verificaDia(8))