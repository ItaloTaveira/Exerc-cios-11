
const prompt = require('prompt-sync')()
let principal = () => {
    // vamos fazer um menu de opções
    let pacientes = []
    let opcao
    do{
        console.log(`Digite \n 1.Cadastra Pacientes \n 2.Consultar Pacientes \n 3.Pacientes de Maior Risco \n 4.Média das idades dos pacientes \n 5.Sair`)
        opcao = Number(prompt())
        switch(opcao){
            case 1: cadastra(pacientes); break
            case 2: consulta(pacientes); break
            case 3: pacienteMaiorRisco(pacientes); break
            case 4: mediaIdade(pacientes); break
            case 5: console.log('Para sair');break
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 5)
}

function pacienteMaiorRisco(vetPacientes) {
    console.log(`Paciente de maior risco:`);

    if (vetPacientes.length === 0) {
        console.log("Nenhum paciente cadastrado.");
        return;
    }

    // Inicializa com o primeiro paciente como sendo o de maior risco
    let pacienteMaiorRisco = vetPacientes[0];

    for (let i = 1; i < vetPacientes.length; i++) {
        const pacienteAtual = vetPacientes[i];

        // Regra 1: Prioridade para condição "grave"
        if (pacienteAtual.condicao === "grave" && pacienteMaiorRisco.condicao !== "grave") {
            pacienteMaiorRisco = pacienteAtual;
        } 
        else if (pacienteAtual.condicao === pacienteMaiorRisco.condicao) {
            // Regra 2: Entre pacientes com mesma condição, maior idade tem prioridade
            if (pacienteAtual.idade > pacienteMaiorRisco.idade) {
                pacienteMaiorRisco = pacienteAtual;
            } 
            // Regra 3: Se idade for igual, maior peso tem prioridade
            else if (pacienteAtual.idade === pacienteMaiorRisco.idade && pacienteAtual.peso > pacienteMaiorRisco.peso) {
                pacienteMaiorRisco = pacienteAtual;
            }
        }
    }

    console.log(`Nome: ${pacienteMaiorRisco.nome}, Idade: ${pacienteMaiorRisco.idade}, Peso: ${pacienteMaiorRisco.peso}, Condição: ${pacienteMaiorRisco.condicao}`);
}


let cadastra = (vetor) => {
    // vetor tem escopo local
    vetor.push({
        nome: prompt(`Informe nome do paciente: `),
        idade: Number(prompt(`Informe idade do paciente: `)),
        peso: Number(prompt(`Informe peso do paciente: `)),
        altura: Number(prompt(`Informe altura do paciente: `)),
        condicao: prompt(`Informe L (Leve), M (Moderada) e G (Grave): `).toUpperCase()
    })
    console.log(`Paciente cadastrado com sucesso`)
} 

let mediaIdade = (vetor) => {
    let somaIdades = vetor.reduce(
        (acum, objeto) => acum + objeto.idade, 0 
    )
    console.log(`Média das idades ${somaIdades / vetor.length}`)
}


let consulta = (vetor) => {
    console.log(vetor)
}
principal()