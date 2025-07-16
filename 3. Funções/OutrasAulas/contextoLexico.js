const valor = 'Global' 

function minhaFuncao() { // Função declarada em contexto global
    console.log(valor)
}

function exec() { // 
    const valor = 'Local' 
    minhaFuncao()
}
exec() // Saída: 'Global', pois no contexto léxico, ele veio antes da funcão 'Local'