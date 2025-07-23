/*26) Fazer um programa para encontrar todos os pares entre 1 e 100*/

function encontrarPares() {
    let pares = []
    let contador = 0
    while (contador !== 101) {
        if (contador % 2 === 0  ) {
            pares.push(` ${contador}`)
        }
    contador++
    }
    return `Os pares são:${pares} , `
}


console.log(encontrarPares().slice(0, 212) + '.')