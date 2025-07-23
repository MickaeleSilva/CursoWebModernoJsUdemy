// Usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
console.log(" ")
//Função construtora(você cria suas próprias)
function Produto(nome, preco, desc) { // visibilidade pública para nome, encapsulamento (diminuição do nível de visibilidade) para preco e desc
    this.nome = nome
    this.getPrecoComDesconto = () => {
        let valorFinal = preco * (1 - desc)
        return valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 4100, 0.10)
const p3 = new Produto ('TV', 5400, 0.20)
console.log(`Produtos e valores com desconto:
${p1.nome} por ${p1.getPrecoComDesconto()}
${p2.nome} por ${p2.getPrecoComDesconto()}
${p3.nome} por ${p3.getPrecoComDesconto()}`)
console.log(' ')

//Função Factory
console.log('Função Factory')
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() { // calcular salário baseado nas faltas que o funcionário teve
            return (salarioBase / 30 * (30 - faltas)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400 , 1)
console.log(`Funcionários e seus salários descontando as faltas:
Funcionário ${f1.nome} receberá ${f1.getSalario()}
Funcionário ${f2.nome} receberá ${f2.getSalario()}`)
console.log(' ')

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log('Nome da filha:', filha.nome)
console.log(' ')
 
// Uma função famosa que retorna Objeto - falando um pouco sobre JSON!
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')
console.log(fromJSON.info)
