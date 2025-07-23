const IntlHugo = {
    NameFormat: (pais, opcoes) => {
      let sobrenome = '';
  
      if (pais === 'pt-BR') {
        sobrenome = 'da Silva';
      }
  
      if (pais === 'en-US') {
        sobrenome = 'Gale';
      }
  
      return {
        format: (valor) => {
          const resultado = `${valor} ${sobrenome}`;
  
          if (opcoes.maiusculo) {
            return resultado.toUpperCase();
          }
  
          return resultado;
        }
      };
    },
  };
  
  console.log(IntlHugo.NameFormat('pt-BR', { maiusculo: false }).format('Mickaele'));
  

  function criadorPessoa(sobrenome) {
    return { nome: `Mickaele ${sobrenome}` };
  }
  
  console.log(criadorPessoa('Silva').nome);