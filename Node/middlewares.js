// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
  ctx.valor1 = "mid1"; // adiciona/modifica dado no contexto
  next(); // passa pro próximo da cadeia
};

const passo2 = (ctx, next) => {
  ctx.valor2 = "mid2";
  next();
};

const passo3 = (ctx) => (ctx.valor3 = "mid3"); // último, não chama next

//criando uma função que executará todos estes middlewares e chamará o next quando ela for disparada

const exec = (ctx, ...middlewares) => {
  const execPasso = (indice) => {
    // verifica se a lista de middlewares existe e se o índice ainda está dentro do array
    if (middlewares && indice < middlewares.length) {
      // chama o middleware atual, passando ctx e a função next
      middlewares[indice](ctx, () => execPasso(indice + 1));
    }
  };
  // começa a execução pelo primeiro middleware
  execPasso(0);
};

const ctx = {};
exec(ctx, passo1, passo2, passo3);

console.log(ctx);
