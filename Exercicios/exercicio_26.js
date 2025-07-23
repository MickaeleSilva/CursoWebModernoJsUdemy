const removerVogais = (palavra) => {
  return palavra.replace(/[aeiou]/gi, "");
};

console.log(removerVogais("banana"));
console.log(removerVogais("jog3o"));
console.log(removerVogais("casa"));
console.log(removerVogais("jkr"));
