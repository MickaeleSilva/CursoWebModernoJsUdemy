const [a] = [10] //não é um array, é um operador destructuring jkkk
console.log(a)

//pegar multiplos elementos a partir de um array e extrair de dentro dela e atribuir a várias variaveis usando apenas uma única atribuição
const [n1,  , n3,  , n5, n6 = 0] = [10, 7, 9, 8, 100] // como n adiconei o valor do n6, ele adicionou o padrão dele que coloquei dentro das chaves (0)
console.log(n1, n3 , n5, n6) //(10, 9, 100, 11) 7 e 8 pulados porque is not defined pelo array
//ou seja: variavel ou constante [identificadores] = [valores de cada valor por virgula]


// o primeiro elemento foi ignorado, o segundo elemento é um outro array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //foi atribuido um array com 2 arrays
console.log(nota) //acima, é pedido pra ignorar o primeiro elemento (ou seja, o primeiro array!)
//há uma virgula agora junto a nota, ou seja, indicando para ignroar o primeiro elemento do segundo array, no caso, citando apenas o segundo na qual atribui nota: 6
