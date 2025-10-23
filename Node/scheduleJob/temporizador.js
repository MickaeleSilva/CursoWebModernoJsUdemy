const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * * * * *", () => {
  // (usando barra / antes é: a cada x tempo) segundo minuto hora dia-do-mês mês dia-da-semana
  console.log("Executando tarefa 1:", new Date().getSeconds());
});

//usando um temporizador padrão do js
setTimeout(function () {
  tarefa1.cancel();
  console.log("cancelando tarefa 1");
}, 20000); // milisegundos - 15 segundos

// criando regras com schedule
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 17;
regra.second = 17;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("executando tarefa 2!", new Date().getSeconds());
});
