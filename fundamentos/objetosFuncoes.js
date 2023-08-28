const cliente = {
    nome: "João",
    idade: 23,
    telefone: ["11222333444", "11444555666"],
    saldo: 200,
    pagamento: function (valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente.");
        }
        else {
            this.saldo -= valor; //This chama o valor que está atribuido
            console.log(`Compra aprovada. Seu saldo é de: ${this.saldo}.`)
        };
    },
}

cliente.pagamento(210); //Precisa chamar a função e passar o parâmetro

