function quebra(){
    console.log(' ')
}
// Vamos falar sobre notação Ponto.

console.log(typeof console) // o console é um objeto
console.log(typeof Math) // Math é um objeto
console.log(Math.ceil(6.1)) //operar um arredondamento
quebra()

// Notação ponto em objeto
const obj1 = {}
obj1.nome = 'Bola' //usando notação ponto pra colocar um atributo em um objeto
//que é o mesmo que..
/// obj1['nome'] ='Bola'
obj1.cor = 'Amarela'
console.log(obj1)
//acessando um objeto específico
console.log(obj1.nome)
quebra()

// Em função
function Obj(nome) {
    this.nome = nome //recebendo o atributo nome por parametro e você vai atribuir a this.nome (atributo público que pdoe ser instanciado)
    this.exec = function() {
        console.log('Exec...') //ja printando
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
