const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',  
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


//Desafio:  Retornar um Array apenas com os preços

const carrinhoObjetos = carrinho.map(item => JSON.parse(item)); // tornando cada array em lingugaem javascript
const precos = carrinhoObjetos.map(item => item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
console.log(precos) // 1
console.log('Valor específico:', carrinhoObjetos[0].preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})); // 2: pegando um preço específico


Array.prototype.mapcaseiro = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
         newArray.push(callback(this[i], i, this))
    }
    return newArray
 }
 
const carrinhoObjetos2 = carrinho.mapcaseiro(item => JSON.parse(item)); /// tornando cada array em lingugaem javascript
const precos2 = carrinhoObjetos2.mapcaseiro(item => item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
console.log(precos2)

