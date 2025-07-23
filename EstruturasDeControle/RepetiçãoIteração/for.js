 let contador = 1

 while(contador <= 10) {
    console.log(`contador = ${contador}`) //tamplate string (incorporam expressões dentro de strings)
    contador++ //operador unário
}

console.log(' ')

for (let i = 1; i <= 10; i++) {                     // separamos as partes por ';', 
    console.log(`i = ${i}`)
}       

console.log(' ')

//Percorrendo o array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length; i++) {
console.log(`nota = ${notas[i]}`)
}