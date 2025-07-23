function bhaskara(ax2, bx, c) {
    let delta = bx**2 - 4*ax2*c
    
    if (delta < 0) {
        return "Delta é negativo"
    } else {
        let x1 = (-bx + Math.sqrt(delta)) / (2*ax2)
        let x2 = (-bx - Math.sqrt(delta)) / (2*ax2)
        return [x1, x2]
    }
}

// Exemplo de uso:
var resultados = bhaskara(3, -5, 12)
console.log(resultados)