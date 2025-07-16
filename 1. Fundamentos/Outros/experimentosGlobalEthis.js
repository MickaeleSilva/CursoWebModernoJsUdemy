let a = 3
console.log('a)', this.a) // não foi encontrado em this.a
console.log('b)', global.a) // não foi encontrado no escopo global (equivalente ao objeto window do browser)

//a não ser que fizessemos desta forma:
global.b = 123
console.log('c)', global.b)

this.c = 456
console.log('d)', this.c)
console.log('e)', module.exports.c)

// ou seja, global responderá a global, this resondá a this, e module.exports é o mesmo que this. então ambos se respondem
//ex:
console.log('f)', module.exports === this)

this.d = false
this.e = 'teste'
//this e module.exports armazenam tudo como se fossem objetos
console.log('g)', module.exports)
//que é o mesmo queg::
//module.exports = { e: 456, f: false, g: 'teste' }

//criando uma variável maluca: sem var e let
abc = 3 // não faça isso! é global. use as variáveis locais, let e var.
// o que ocorre por trás das cortinas é isso:
console.log('h) variavel maluca: diretamente no objeto global do node:', global.abc)