// Factory Function simples com parâmetro personalizado
function criarProduto(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1 // com valor padrão
    }
}

const produ1 = criarProduto('Notebook', 3580.98) 
console.log(produ1)
//ou
console.log(criarProduto('Ipad', 1199.99)) // porém aqui não especificamos o produto de forma que possamos chama-lo posteriormente

