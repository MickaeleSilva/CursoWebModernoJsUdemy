console.log(module.exports === this); // true
console.log(module.exports === exports); // true
console.log();

this.a = 1;
exports.b = 2;
module.exports.c = 3;

console.log(module.exports); // { a: 1, b: 2, c: 3 }

exports = null;
console.log(exports); // null
console.log(module.exports); // ainda { a: 1, b: 2, c: 3 }

exports = { nome: "teste" };
console.log(exports); // { nome: 'teste' }
console.log(module.exports); // ainda { a: 1, b: 2, c: 3 }

module.exports = { publico: true };
console.log(module.exports); // { publico: true }
