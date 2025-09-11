const contadorA = require("./instancia_unica");
const contadorB = require("./instancia_unica");

const contadorC = require("./instancia_nova")();
const contadorD = require("./instancia_nova")();

//incrementando A, e mesmo assim, o contadorB atualizará, pois os dois apontam para o mesmo objeto na memória.
contadorA.inc();
contadorA.inc();
console.log(`instancia nova: ${contadorB.valor}`);

//agora com instancia unica
contadorC.inc();
contadorC.inc();
console.log(`instancia única: ${contadorD.valor}`);
