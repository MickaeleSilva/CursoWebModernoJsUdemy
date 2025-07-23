// formas de exportar

// o que tem prioridade é o module.exports.
// Se você usar this ou exports primeiro, e depois fizer
// module.exports = {...}, o module.exports vai sobrepor tudo
// e os outros serão ignorados.
// 1. usaremos este na referencia
module.exports = {
  ola: "Fala Gafanhoto!", // gustavo guanabara mentioned
  bemVindo: "Bem Vindo ao Node!",
  ateLogo(nome) {
    return `Até logo, ${nome}.`;
  },
};

// serão ignorados os exports a seguir

// 2.
exports.bemVindo2 = "Bem Vindo ao Node!";

// Equivalente a:
module.exports.bemVindo3 = "Bem Vindo ao Node!";

// 3. Também funciona, porque dentro de um módulo, this é um atalho para exports, que por sua vez é ligado a module.exports.
this.ola1 = "Fala Pessoal";

// Equivalente a:
module.exports.ola2 = "Fala Pessoal";
