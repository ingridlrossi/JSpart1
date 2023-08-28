const cliente = {
    nome: "João",
    idade: 23,
    telefone: ["11222333444", "11444555666"],
}

//Lista de endereços - e cada endereço é um objeto
cliente.endereco = [
    {
    rua: "Rua João Naves",
    numero: 678,
    apartamento: true,
    complemento: "Ap numero 102",
    },

    {
    rua: "Rua 15 de Novembro",
    numero: 255,
    apartamento: false,
    complemento: "Casa de portão branco",
    }
];

cliente.endereco.push({
    rua: "Rua do Mecânico",
    numero: 1488,
    apartamento: true,
    complemento: "Comércio a frente",
});

const apenasAp = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);

console.log(apenasAp);