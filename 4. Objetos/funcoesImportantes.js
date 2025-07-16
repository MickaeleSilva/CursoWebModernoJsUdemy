const pessoa = {
    nome: 'Rebeca Andrade',
    idade: 2,
    peso: 13,
    LocaldeNascimento: 'Hospital Vera Cruz'

}
console.log(Object.keys(pessoa)) // pegando todas as chaves (atributos)
console.log(Object.values(pessoa)) // pegando valores do objeto
console.log(Object.entries(pessoa)) // retorna um array com subarrays contendo a chave e o valor, nesse caso, cada array tem duas posiçoes, no qual vc pode até percorrer usando outros métodos, por exemplo:
console.log(' ')

Object.entries(pessoa).forEach((elemento) => {
    console.log(`${elemento[0]}: ${elemento[1]}`)
})


// defineProperty(objeto, chave/atributo, {configurações})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // A propriedade DataNascimento será listada quando você iterar sobre as propriedades do objeto (por exemplo, em um loop for...in ou usando Object.keys()).
    writable: false, // Isso significa que a propriedade não pode ser modificada
    value: '01/01/2022'
}) 

pessoa.dataNascimento = '01/01/2023'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
console.log(' ')

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = {b: 2}
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj) // ele não repete atributos, porém o seu valor será sobreescrito sempre pelo último 

Object.freeze(obj)
obj.c = 1234
console.log(obj)