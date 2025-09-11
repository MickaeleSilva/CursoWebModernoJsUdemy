const fs = require("fs/promises"); // pegando a versão de promises do fs

const caminho = __dirname + "/arquivo.json";

async function lerArquivo() {
  try {
    // 1) Lendo o arquivo de forma assíncrona
    const conteudo = await fs.readFile(caminho, "utf-8");
    console.log("JSON bruto como string:");
    console.log(conteudo);

    // 2) Convertendo para objeto
    const config = JSON.parse(conteudo);
    console.log("Propriedades do objeto:");
    console.log("Host:", config.obj.host);
    console.log("User:", config.obj.user);
  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
  }
}

// Chamando a função
lerArquivo();

console.log(
  "Essa linha roda antes da leitura terminar, porque o código é assíncrono!"
);
