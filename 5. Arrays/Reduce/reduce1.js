const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
// diferenciando 
  // 1. map para saber os aprovados
  aprovados = alunos.map((e) => {
    if (e.nota <= 5) {
        return `Aluno(a) ${e.nome} foi reprovado com  ${e.nota}`
    } else {
        return `Aluno(a) ${e.nome} foi aprovado com ${e.nota}`
    
    }})
console.log("Aprovados:", aprovados)
console.log(' ')

// 2. filter para obter bolsistas reprovados// possui retorno automatico de true ou false
let bolsistas = a => a.bolsista // função arrow
let reprovados = a => a.nota <= 5 // função arrow
bolsistasReprovados = alunos.filter(reprovados).filter(bolsistas)
console.log("Bolsistas reprovados: ", bolsistasReprovados)
console.log(' ')

// 3. reduce para somar notas da sala e exibir uma média da sala
let notas = alunos.map((e) => e.nota)
let soma = (acc, vA) => acc + vA

let somadeNotas = notas.reduce(soma)
let media = somadeNotas / alunos.length
console.log('Soma de notas:', somadeNotas)
console.log('Média de notas dos alunos:', media)

// aula com o professor: demonstrando como reduce funciona
console.log('notas dos alunos:', alunos.map(a => a.nota)) // notas
const resultado = alunos.map(a => a.nota).reduce(function(acc, atual) {
    console.log(acc, atual)
    return acc + atual
})