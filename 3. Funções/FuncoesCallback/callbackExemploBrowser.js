// Exemplo de callback no browser: Função que acessa os elementos a partir de uma tag
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('o evento ocorreu!')
} 