const clientes = require("./aula05.json");

function filtrarApartamentoSemComplemento(clientes) 
{
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
            );
        //quer que tenha um apartamento e não tenha um complemento.
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);

//--------------------------------------------------------------------
//Ordenar em ordem alfabetica

function ordenar(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);