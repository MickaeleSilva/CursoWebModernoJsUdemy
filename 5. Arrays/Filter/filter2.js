Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) { //função que vai ser passsada em filter(contexto/array[indice do array])
            newArray.push(this[i])
        }
    } 

    return newArray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

let CaroEfragil = produtos.filter2(caro).filter2(fragil)

console.log('caro e fragil: ', CaroEfragil)
