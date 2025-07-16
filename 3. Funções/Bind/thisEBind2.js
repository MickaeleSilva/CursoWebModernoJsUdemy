function Pessoa() {    // Declaração de uma função construtora chamada Pessoa.
    this.idade = 0     // Inicializa uma propriedade chamada idade no objeto criado pela função Pessoa, atribuindo o valor inicial 0.
    setInterval(function() { // Inicia um intervalo de tempo que executa a função anônima a cada 1000 milissegundos (1 segundo).
        this.idade++         // Incrementa a propriedade idade no objeto referenciado por this.
        console.log(this.idade) // Exibe a idade no console.
    }.bind(this), 1000) // Fecha a função anônima, usa .bind(this) para garantir que this se refira à instância de Pessoa, e define o intervalo de 1000 milissegundos para a execução.
    } // Fecha a função construtora Pessoa.

    new Pessoa // Cria uma nova instância do objeto Pessoa, iniciando o processo de incrementar a idade a cada segundo.






//acima, o this.idade não aponta para objeto poessoa pois quem esta disparando a chamada dessa função é um disparador e não o objeto pessoa

console.log('Dica, comentário multipla linha'/* Comentário entre código   */)