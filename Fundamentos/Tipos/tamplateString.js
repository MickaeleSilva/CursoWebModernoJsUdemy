const quebraLinha = " "
//declaração de uma constante "Nome" com valor de "Rebeca"
const nome = "Rebeca"

//maneira tradicional de concatenar
console.log('Forma Tradicional de concatenar:')
const concatenacao = 'Olá ' + nome + '! '+ 'Tudo bem?'
console.log(concatenacao)
console.log(quebraLinha)

//agora com tamplate string (usando crase `)
console.log('Agora com tamplate strings:')
const tamplate = `
Olá,
${nome}!
Tudo bem?
`
console.log(tamplate)

//expressões..
console.log('Expressões: uma construção que pode ser avaliada para um valor. ')
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //Função de Setas (Arrow Function):
console.log(`Ei... ${up('cuidado')}!`)