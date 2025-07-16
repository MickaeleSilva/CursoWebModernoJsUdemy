 // como seria a partir de um objeto gerar um array
 const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}

 Object.defineProperty(quaseArray, 'getValues', {
    value: function () { return Object.values(this) }, // função que retorna um array com os valores das propriedades do objeto
    enumerable: false
 })

console.log(quaseArray[0])
console.log(quaseArray[1])
console.log(quaseArray[2])

console.log(quaseArray.getValues())