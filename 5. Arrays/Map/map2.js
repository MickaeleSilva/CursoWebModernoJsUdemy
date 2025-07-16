const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',  
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


//Desafio:  Retornar um Array apenas com os preços

const carrinhoObjetos = carrinho.map(item => JSON.parse(item));
const precos = carrinhoObjetos.map(item => item.preco);
console.log(precos)

