// A notação literal de objeto é uma maneira conveniente e clara de criar objetos, especialmente quando você precisa definir rapidamente objetos com várias propriedades e métodos.

// A abreviação de propriedades (ou shorthand property names): quando os nomes das propriedades são os mesmos que os nomes das variáveis cujos valores você deseja atribuir, ou seja,  ele serve para reduzir a redundância quando o nome da propriedade e o nome da variável são os mesmos.
const a = 1
const b = 2
const c = 3

const obj1 = { a, b, c } //automaticamente ele assumirá o nome da constante como seu atributo o valor dela como seu valor. 
const obj2 = { um: a, dois: b, três: c } // aqui você mesmo pode definir este atributo
console.log(obj1, obj2)


// Atribuição dinâmica de propriedades em um objeto: Permite definir propriedades de objeto com nomes que são determinados dinamicamente em tempo de execução.
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr] : valorAttr}
console.log(obj4)

// Funções dentro de um objeto literal:
// Forma tradicional: chave: valor
const obj5 = {
    funcao1: function() {
        // ...
    }
}

// Forma mais nova do js:
const obj6 = {
    funcao2() {
        //...
    }
}
console.log(obj5, obj6)
