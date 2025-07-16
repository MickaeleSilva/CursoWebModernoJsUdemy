let enter = () => console.log(" ")

// filtrando array com filter
function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
console.log(filtered)
enter()


// outro exemplo
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


// teste 1 
let acimaDe2000 = produtos.filter(function(p) {
    return p.preco > 2000
})
console.log(acimaDe2000)
enter()


// teste 2
let naoFrageis = produtos.filter(function(e){
    return e.fragil 
})
console.log(naoFrageis)
enter()


//teste 3
console.log(produtos.filter(function(p) {
    return false // todos os elementos retornam falso e nada é atribuido ao array do filter
}))

//nao aplicar o filter é o mesmo que passar todos os elementos:
console.log(produtos.filter(function(p) {
    return true // todos os elementos retornam falso e nada é atribuido ao array do filter
}))
enter()


//filtrando mais de uma especificidade
let caro = p => p.preco >= 500

let fragil = p => p.fragil //ele mesmo volta falso ou verdadeiro

// juntando os dois: 
let veriCaroEfragil = produtos.filter(caro).filter(fragil)
console.log('caro e fragil: ', veriCaroEfragil)
