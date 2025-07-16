const pessoa = {
    saudacao: 'Bom dia!',
    falar() {   //Nova forma de por função em objeto!
        console.log(this.saudacao) // acessando atributo saudação de 'pessoas'
    }
}

pessoa.falar()

//undefined
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e Orientado a objetos
//vai resultar em undefined pois saudacao está direcionado para pessoa, e não para a contsnate "falar" , ou seja, falar se torna vazio, não definido

// O que fazer nesse caso? / O uso do BIND!
const falarDePessoa = pessoa.falar.bind(pessoa) // O bind passando o objeto na qual seja resolvido a questão do this, ou seja, passando pessoa para a função bind, assim o this terá a referência em pessoa.
falarDePessoa() // agora sim ele aponta para o objeto correto, localizado em pessoa.
//O bind é responsável por amarrar um determinado objeto pra ele ser o dono da executação daquele método

const falar2 = pessoa.falar
falar2()