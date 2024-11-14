const prompt = require('prompt-sync')()

let hospedeMaiorEstadia = (vetHospedes) => {
    let hospedeMaiorEst = vetHospedes[0]
    let da1 = vetHospedes[i].data.split("-").reverse().join("-");
    da1 = new Date(da1);
    let da2 = hospedeMaiorEst.data.split("-").reverse().join("-");
    da2 = new Date(da2);
    if(da1 < da2){
        hospedeMaiorEst = vetHospedes[i]
    }
    for(let i = 0; vetHospedes.length; i++){
        hospedeMaiorEst = vetHospedes[i]
    }
}
console.log(hospedeMaiorEst)

let hospedesnoHotel = (vetHospedes) => {
    console.log(vetHospedes)
}
let quartosDisponiveis = (vetQuartos) => {
    let vetdisponiveis = vetQuartos.filter(
        obj => obj.disponivel == true
    )
}

retiraHospede = (vetHospedes, vetQuartos) => {
    let cpfInteresse = prompt(`Informe o CPF do hóspede: `)
    let hospedeEncontrado = vetHospedes.find(
        obj => obj.cpf == cpfInteresse
    )
    if(hospedeEncontrado == undefined){
        console.log(`Hóspede não existe!`)
    }
    else {
        let posicaoQuarto = vetQuartos.findIndex(
            obj => obj.quarto == quartoHospede
        )
        // atualiza a disponibilidade
        vetQuartos[posicaoQuarto].disponivel = true
        let posicaoHospede = vetHospedes.findIndex(
            obj => obj.cpf = cpfInteresse
        )
        vetHospedes.splice(posicaoHospede, 1)
    }
}

cadastraHospede = (vetHospedes, vetQuartos) => {
    let numeroQuarto = Number(prompt(`Informe o quarto`))
    if (numeroQuarto < 101 || numeroQuarto > 120){
        console.log(`Quarto inválido`)
    }
    else {
        let quartoEncontrado = vetQuartos.find(
            obj => obj.quarto == numeroQuarto 
        )
        if (quartoEncontrado.disponivel){
            vetHospedes.push({
                cpf: prompt(`Informe CPF: `),
                idade: Number(prompt(`Informe idade: `)),
                quarto: numeroQuarto,
                data: prompt(`Informe data: dd-mm-yyyy (12-11-2024): `)
            })
            quartoEncontrado.disponivel = false
        }
        else {
            console.log(`Quarto indisponível`)
        }
    }
}

let principal = () => {
    // quartos existentes no hotel
    let quartos = [
        {quarto: 101, disponivel: true}, {quarto: 102, disponivel: true},
        {quarto: 103, disponivel: true}, {quarto: 104, disponivel: true},
        {quarto: 105, disponivel: true}, {quarto: 106, disponivel: true},
        {quarto: 107, disponivel: true}, {quarto: 108, disponivel: true},
        {quarto: 109, disponivel: true}, {quarto: 110, disponivel: true},
        {quarto: 111, disponivel: true}, {quarto: 112, disponivel: true},
        {quarto: 113, disponivel: true}, {quarto: 114, disponivel: true},
        {quarto: 115, disponivel: true}, {quarto: 116, disponivel: true},
        {quarto: 117, disponivel: true}, {quarto: 118, disponivel: true},
        {quarto: 119, disponivel: true}, {quarto: 120, disponivel: true},
    ]
    // hospedes existentes no hotel
    let hospedes = [ ]
    cadastraHospede(hospedes, quartos)
    retiraHospede(hospedes, quartos)
    quartosDisponíveis(quartos)
    hospedesnoHotel(hospedes)
    hospedeMaiorEstadia(hospedes)
}

principal()