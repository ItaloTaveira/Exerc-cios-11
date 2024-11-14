const prompt = require('prompt-sync')();

// item 1
let item1 = (vetor) => {
    vetor.forEach(
        obj => console.log(`Nome: ${obj.nome} Qtde: ${obj.qtde}`)
    )
}
item1(estoque)

// item2
let item2 = (vetor) => {
    // considerar que o menor valor em estoque é o primeiro produto
    let objMenorQtde = vetor[0]
    // percorre vetor procurando por uma qtde menor
    vetor.forEach(
        obj => {
                if (obj.qtde < objMenorQtde.qtde){
                    objMenorQtde = obj
                }
            }
    )
    console.log(objMenorQtde)
}
item2(estoque)

// item 3
let item3 = (vetor) => {
    let soma = vetor.reduce(
        (acum, obj) => acum + (obj.qtde * obj.preco), 0
    )
    console.log(`Total em estoque ${soma}`)
}
item3(estoque)

// item 4
let item4 = (vetor) => {
    vetor.push(
        {
            nome: prompt(`Informe nome`), 
            qtde: Number(prompt(`Informe qtde`)),
            preco: Number(prompt(`Informe preço`))
        }
    )
}

let principal = () => {
    let estoque = []
    // vamos fazer um menu de opções
    let opcao
    do{
        console.log(`Digite 1.Listar o nome e quantidade \n 2.Maior quantidade no estoque \n 3. Total em estoque \n 4.Cadastrar produto \n 5.Sair`)
        opcao = Number(prompt())
        switch(opcao){
            case 1: item1(estoque); break
            case 2: item2(estoque); break
            case 3: item3(estoque); break
            case 4: item4(estoque); break
            case 5: console.log('Vai sair');break
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 5)
}
principal()