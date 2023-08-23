const cliente = {
    nome: "João",
    idade: 23,
    cpf: "123111222333",
};

//Pode usar o . ou o [] para acessar a variável

//Acessando com .
console.log(`O nome da pessoa é ${cliente.nome} e os 3 primeiros dígitos do CPF dele é ${cliente.cpf.substring(0, 3)}.`);

//Acessando com []
console.log(`O nome da pessoa é ${cliente["nome"]} e os 3 primeiros dígitos do CPF dele é ${cliente["cpf"].substring(0, 3)}.`);

//Porque usar []
const chaves = ["nome", "idade", "cpf"];

chaves.forEach((chave) => {
    console.log(`A chave é ${chave} com o valor ${cliente[chave]}.`);
});

//---------------------------------------------------------------------------------------------------
//Adicionar e mudar variavel dentro do objeto
cliente.telefone = "11 222333444";
cliente.nome = "Luma Silva";
delete cliente.cpf;

console.log(cliente);