function caracteresContidos(str1, str2) {
    // Convertendo as strings para letras minúsculas e criando conjuntos de caracteres com set (sem duplicidade)
    let setStr1 = new Set(str1.toLowerCase());
    let setStr2 = new Set(str2.toLowerCase());
    
    // Verificando se todos os caracteres de str1 estão em str2
    for (let char of setStr1) {
        if (!setStr2.has(char)) {
            return false;
        }
    }
    
    // Verificando se todos os caracteres de str2 estão em str1
    for (let char of setStr2) {
        if (!setStr1.has(char)) {
            return false;
        }
    }

    return true;
}

console.log(caracteresContidos("Amor", "Roma")); // true
console.log(caracteresContidos("Teste", "Sete")); // false
console.log(caracteresContidos("Abc", "cba")); // true
console.log(caracteresContidos("JavaScript", "Java")); // false
