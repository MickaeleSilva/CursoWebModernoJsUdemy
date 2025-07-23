const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: todos os alunos não bolsistas? (true or false)
const todosSaoNaoBolsistas = alunos.reduce((acc, aluno) => acc && !aluno.bolsista, true);

console.log('Todos NÃO são bolsistas?:', todosSaoNaoBolsistas); // false

// Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsistas) => resultado && bolsista
console.log('Todos são bolsistas?:', alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = alunos.reduce((acc, aluno) => { 
    acc || aluno.bolsista, false) }, // ou use alunos.some(aluno => aluno.bolsista);
console.log('Tem algum bolsista? Quem?', algumBolsista)