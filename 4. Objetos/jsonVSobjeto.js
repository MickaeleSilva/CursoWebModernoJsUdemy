// criando um objeto e o tranformando em JSON
const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}} // a função foi excluida do jSON, pois o mesmo é um formato de dados não é algo que é executado, são dados trafegando
console.log(JSON.stringify(obj)) // saída: {"a":1,"b":2,"c":3}


// transformando o JSON em um objeto

// console.log(JSON.parse("{ d: 4, e: 5, f: 6 }")) não faça assim! - erro gerado.
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) também não é um formato válido!
// tentando da forma correta agora....
console.log(JSON.parse('{ "d": 4, "e": 5, "f": 6 }')) // todos os atributos no formato JSON devem ser delimitados por aspas duplas, e a string maior com aspas simples


// Algumas possibilidades que o JSON suporta:
console.log(JSON.parse('{ "nome": "Amélia" }')) // se o valor do atributo for uma string, deve-se colcoar aspas duplas. Dará erro se por aspas simples.
console.log(JSON.parse('{ "maior de Idade": true}')) // booleano como valor do objeto
console.log(JSON.parse('{ "filhos": {"primeiro": "João", "Segundo": "Maria" }}'))  // objeto como valor do objeto
console.log(JSON.parse('{ "sobrenome": ["da Silva"]}')) // objeto com valor de array


