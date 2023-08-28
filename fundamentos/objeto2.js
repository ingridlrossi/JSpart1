const cliente = {
    nome: "João",
    idade: 23,
    telefone: ["11222333444", "11444555666"],
}

console.log(cliente);
console.log(cliente.telefone[0]); //Acessa o primeiro telefone
console.log(cliente.telefone[1]); //Acessa o segundo telefone

//Adicionando um objeto dentro de um item do objeto

cliente.endereco = {
    rua: "Rua João Naves",
    numero: 678,
    apartamento: true,
    complemento: "Ap numero 102",
};

console.log(cliente);