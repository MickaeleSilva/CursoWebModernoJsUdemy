/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

function revenda(modelo) {
    let mensagem 
    switch (modelo.toLowerCase()) {
        case "hatch":
            mensagem = "Compra efetuada com sucesso"
            break
        case "sedans":
            mensagem = "Tem Certeza que prefere este modelo?"
            break
        case "motocicletas":
            mensagem = "Tem Certeza que prefere este modelo?"
            break
        case "caminhonetes":
            mensagem = "Tem Certeza que prefere este modelo?"
            break
        default:
            mensagem = "Não trabalhamos com este tipo de automóvel aqui."
    }
return mensagem
}

console.log(revenda("Caminhonetes"))
console.log(revenda("MOTO"))
console.log(revenda("hatch"))