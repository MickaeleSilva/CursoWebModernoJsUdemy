//  || - símbolo pipe (ou - or)
//  && - 'e' formal   (e -and)
//  !!(parametro1 ^ parametro1) - operador bitwise xor (ou or exclusivo de forma complicada)
//  ! - negação lógica

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //operador bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // ou exclusivo
    const manterSaudavel = !comprarSorvete  // negação lógica //operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // omitindo chave (recurso novo de 2025) ex: sorvete: comprarSorvete. agora ele automaticamente cria uma chave com o mesmo nome da constante

}
console.log('1:', compras(true, true))
console.log(' ')
console.log('2:', compras(true, false))
console.log(' ')
console.log('3:', compras(false, true))
console.log(' ')
console.log('4:', compras(false, false))
