function arredondarNumero(valor) {
    // - Solução Simples|  let numeroArredondado = valor.toFixed(2).replace('.', ',') 
    let numeroArredondado = Intl.NumberFormat(  //acessando uma propriedade(que é uma função) do objt Intl
      'pt-BR', // país
      { // obj de configuração
        style: 'currency', 
        currency: 'BRL' 
      }
    ).format(valor)
    
    return numeroArredondado
}
console.log(arredondarNumero(0.300000000))