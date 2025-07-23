function Pessoa() {    // Declaração de uma função construtora chamada Pessoa.
    this.idade = 0     // Inicializa uma propriedade chamada idade no objeto criado pela função Pessoa, atribuindo o valor inicial 0.
		const self = this // atribui a constante self no objeto this
		setInterval(function() { // Inicia um intervalo de tempo que executa a função anônima a cada 1000 milissegundos (1 segundo).
        self.idade++    // Incrementa a propriedade idade no objeto referenciado por self.
        console.log(self.idade) // Exibe a idade no console.
    }, 1000) // Fecha a função anônima
    } // Fecha a função construtora Pessoa.
new Pessoa
