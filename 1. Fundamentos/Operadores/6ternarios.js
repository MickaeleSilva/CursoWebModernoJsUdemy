//O ternário é composto por 3 operandos
//a resposta de um operador ternário é retornar um dos dois valores que voce pode inclusive armazenar em uma constante ou como nesse caso, retornar como resultado dessa função
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

//é o mesmo que:
const resultado1 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}


//é também o mesmo que:
function resultado2 (nota) {
    if (nota >= 7) {
      return 'Aprovado';
    } else {
      return 'Reprovado';
    }
  }

  //saídas
console.log(resultado(7.1))
console.log(resultado1(7.1))
console.log(resultado2(5))
