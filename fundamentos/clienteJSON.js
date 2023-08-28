const dados = require("./cliente.json");
//require puxa o código de algum outro lugar

console.log(dados);

//stringficação do JSON
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

//transformando de volta em objeto
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);

