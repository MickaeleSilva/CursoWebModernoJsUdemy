function quebra() {
    console.log(' ')
}
//Atribuição Aditiva (junto da atribuição, virá uma adição, e assim com todos os atribuidores.)
const a = 7   // <-- atribuindo 7 a A
let b = 3
b += a //acrescentando o valor de A a variavel b, e alterando o valor de b ( b = b + a)
console.log('(+) agora o valor de b é:', b)

//Atribuição Subtrativa - agora b é 10.
b -= 4   // b = 10 - 4
console.log('(-) agora o valor de b é:', b)

//Atribuição Multiplicativa - b é 6 agora
 b *= 2   // b = 6 * - agora b é 6
 console.log('(*) agora o valor de b é:', b)

 //Atribuição Divisiva - agora b é 12
 b /= 2   // b = 12 / 2
 console.log( '(/) agora o valor de b é:', b)

 //Atribuição Modular
 //b %= 2   //b = 12 % 2 (resto da divisão anterior, que no caso é 0 pois não tem resto, se for par sairá 0 no console, se for impar sairá 1, como 0 é par, sairá 0)
 //console.log('(%) agora o valor de b é:', b)

 //Atribuição Exponencial
 b **= 2   // b = b ** 2
 console.log('(**) agora o valor de b é:', b)


//Atribuição Modular (resto)
b %= 2   //b = 12 % 2 (resto da divisão anterior, que no caso é 0 pois não tem resto, se for par sairá 0 no console, se for impar sairá 1, como 0 é par, sairá 0)
console.log('(%) agora o valor de b é:', b)
