// O Node automaticamente preenche process.argv com:
// [0] -> caminho do Node
// [1] -> caminho do script
// A partir do [2] -> argumentos que passamos no terminal

// Aqui verificamos se o argumento "-a" foi passado
const anonimo = process.argv.includes("-a");

// OU, equivalente:
const anonimo2 = process.argv.indexOf("-a") !== -1;

console.log(anonimo, anonimo2);

// Se for anônimo, só cumprimenta e encerra
if (anonimo2) {
  // se add -a no temrminal é true, se add nada é false
  process.stdout.write("Fala Anônimo!\n");
  process.exit(); // desnecessário aqui, pois o processo encerra sozinho
} else {
  // Corrigido: é process.stdout, não process.std
  process.stdout.write("Informe seu nome: ");

  // Ouvindo evento "data" de stdin corretamente
  process.stdin.on("data", (data) => {
    const nome = data.toString().trim(); // trim() remove \n e espaços extras
    process.stdout.write(`Fala ${nome}!!\n`);
    process.exit(); // encerra o programa
  });
}
