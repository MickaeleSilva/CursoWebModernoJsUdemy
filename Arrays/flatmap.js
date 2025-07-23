const escola = [{
    nome: 'Turma M1',       
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1   
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]  
console.log(escola[0].alunos[1].nota) // ana -> 9.3


//escola é um array de objetos, cada objeto tem um nome e um array de alunos
//vamos extrair todas as notas dos alunos em um único array usando o flatMap

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1) 


//"No caso, aluno já se refere a cada elemento dentro de alunos, enquanto turma é um parâmetro que percorre cada elemento de escola, acessa turma.alunos, e então getNotaDoAluno pega cada aluno desse array e retorna sua nota."

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])) //concatenando os arrays

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
// isso foi feito para que o flatMap funcione em todos os arrays, e não apenas em escola

const arr = [[1, 2], [3, 4]];
console.log(arr.flatMap(x => x)); // [1, 2, 3, 4]
