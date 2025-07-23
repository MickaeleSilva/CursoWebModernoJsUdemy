// tratamento de Erro no Js : Try, Catch, Throw
//simulando uma situação de erro:

function tratarErroELancar(erro) {
    // throw new Error('...')   ou..
    // throw 10                 ou..
    // throw true               ou..
    // throw 'mensagens'        ou..
    throw {
        nome: erro.name, //chamando o nome/tipo do erro
        msg: erro.message, //chamando a mensagem do erro
        date: new Date     // data e horario do erro
    }
}


function imprimirNomeGritado(obj) {
    try  {
       console.log(obj.name.toUpperCase() + '!!!') //aqui ocorre o erro
   } catch (e) {  //o erro é passado para catch
     tratarErroELancar(e)  // o erro é personalizado
   } finally {
    console.log('final') // mesmo que aja erro o finally será chamado
         }
    
}

const obj = { nome: 'Mickaele' }
imprimirNomeGritado(obj)

