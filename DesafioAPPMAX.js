class cozinha {
    constructor(nomeCozinha, horaAbertura, horaFechamento, pratoPrincipal, armazemarIngredientes) {
        this.nomeCozinha = nomeCozinha
        this.horaAbertura = horaAbertura
        this.horaFechamento = horaFechamento
        this.pratoPrincipal = pratoPrincipal
        this.armazemarIngredientes = (funcaoIngrediente)
    }
    anunciarNomeCozinha() {
        console.log(`Nome: ${this.nomeCozinha}`)
    }
    anunciarHoraAbertura() {
        console.log(`Horário de abertura: ${this.horaAbertura}`)
    }
    anunciarHoraFechamento() {
        console.log(`Horário de fechamento: ${this.horaFechamento}`)
    }
    anunciarPratoPrincipal() {
        console.log(`Prato Principal: ${this.pratoPrincipal}`)
    }
    addArmazenarIngredientes(array) {
        this.armazemarIngredientes.push()
    }
    anunciarArmazenarIngredientes() {
        console.log(`Quantidade de ingredientes: ${this.armazemarIngredientes.length}`)
    }

}

class ingrediente {
    constructor(nomeIngrediente, dataValidade) {
        this.nomeIngrediente = nomeIngrediente
        this.dataValidade = dataValidade
    }
    anunciarNomeIngrediente() {
        console.log(`Nome: ${this.nomeIngrediente}`)
    }
    anunciarDataValidade() {
        console.log(`Data de validade: ${this.dataValidade}`)
    }
}

{
    cozinha1 = new cozinha('Cozinha mineira', 14, 20, 'Feijoada', (funcaoIngrediente = ['Feijão', 'Farinha', 'Arroz', 'Carne de Porco', 'Linguiça']))
    cozinha1.anunciarNomeCozinha()
    cozinha1.anunciarHoraAbertura()
    cozinha1.anunciarHoraFechamento()
    cozinha1.anunciarPratoPrincipal()
    cozinha1.addArmazenarIngredientes()
    cozinha1.anunciarArmazenarIngredientes()
    
    console.log("\nLista de ingredientes:")

    var data1a = new Date(2022, 03, 30).toLocaleDateString('pt-BR')
    // Não consegui fazer com que a data ficasse no formato brasileiro quando testado o replit.com, (no Visual Studio Code ela ficou no formato brasileiro).
    // Tentei contornar isso de várias maneiras porém sem sucesso, então, por fim, decidi manter no formato americano.
    const ingrediente1a = new ingrediente('Feijão', data1a)
    ingrediente1a.anunciarNomeIngrediente()
    ingrediente1a.anunciarDataValidade()
    
    var data2a = new Date(2022, 04, 04).toLocaleDateString('pt-BR')
    const ingrediente2a = new ingrediente('Farinha', data2a)
    ingrediente2a.anunciarNomeIngrediente()
    ingrediente2a.anunciarDataValidade()
    
    var data3a = new Date(2022, 03, 27).toLocaleDateString('pt-BR')
    const ingrediente3a = new ingrediente('Arroz', data3a)
    ingrediente3a.anunciarNomeIngrediente()
    ingrediente3a.anunciarDataValidade()
    
    var data4a = new Date(2022, 02, 15).toLocaleDateString('pt-BR')
    const ingrediente4a = new ingrediente('Carne de Porco', data4a)
    ingrediente4a.anunciarNomeIngrediente()
    ingrediente4a.anunciarDataValidade()
    
    var data5a = new Date(2022, 03, 03).toLocaleDateString('pt-BR')
    const ingrediente5a = new ingrediente('Linguiça', data5a)
    ingrediente5a.anunciarNomeIngrediente()
    ingrediente5a.anunciarDataValidade()
}

console.log("\n")

{
    const cozinha2 = new cozinha('Cozinha chinesa', 10, 23, 'Yakissoba', (funcaoIngrediente = ['Champignon', 'Brócolis', 'Macarrão', 'Carne']))
    cozinha2.anunciarNomeCozinha()
    cozinha2.anunciarHoraAbertura()
    cozinha2.anunciarHoraFechamento()
    cozinha2.anunciarPratoPrincipal()
    cozinha2.addArmazenarIngredientes()
    cozinha2.anunciarArmazenarIngredientes()
    
    console.log("\nLista de ingredientes:")
    
    var data1b = new Date(2022, 01, 27).toLocaleDateString('pt-BR')
    const ingrediente1b = new ingrediente('Champignon,', data1b)
    ingrediente1b.anunciarNomeIngrediente()
    ingrediente1b.anunciarDataValidade()
    
    var data2b = new Date(2022, 00, 25).toLocaleDateString('pt-BR')
    const ingrediente2b = new ingrediente('Brócolis,', data2b)
    ingrediente2b.anunciarNomeIngrediente()
    ingrediente2b.anunciarDataValidade()

    var data3b = new Date(2022, 03, 25).toLocaleDateString('pt-BR')
    const ingrediente3b = new ingrediente('Macarrão', data3b)
    ingrediente3b.anunciarNomeIngrediente()
    ingrediente3b.anunciarDataValidade()

    var data4b = new Date(2022, 02, 17).toLocaleDateString('pt-BR')
    const ingrediente4b = new ingrediente('Carne', data4b)
    ingrediente4b.anunciarNomeIngrediente()
    ingrediente4b.anunciarDataValidade()
}
