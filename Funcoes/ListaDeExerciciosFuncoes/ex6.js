/* 
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

m = montante, que é o  valor futuro, de resgate, da aplicação.
c = capital, ou valor aplicado, também chamado de valor presente
i = taxa de juros
n = tempo de aplicação (número de períodos)
*/

Number.prototype.formatar = function() {
    return `R$ ${this.toFixed(2).replace('.', ',')}`
}

function montanteJurosSimples(c, i, n) {
    let jurosSimples = c * i * n
    let montante = c + jurosSimples
    return {
        jurosSimples,
        montante,
        n
    }
}
//const resultado = montanteJurosSimples(600, 0.12, 12)
//console.log("O montante será de", resultado.montante.toFixed(2).replace('.', ','),"em", resultado.n, "anos com o juros de", resultado.jurosSimples)

const {jurosSimples, montante, n} = montanteJurosSimples(600, 0.12, 12)

console.log(
    `O juro recebido após ${n} anos será de ${jurosSimples.formatar()}`,
    `e seu montante será de ${montante.formatar()} `
)