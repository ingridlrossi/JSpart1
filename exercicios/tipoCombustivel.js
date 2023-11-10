const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obterTipoCombustivel(codigo) {
  switch (codigo) {
    case 1:
      return 'Álcool';
    case 2:
      return 'Gasolina';
    case 3:
      return 'Diesel';
    case 4:
      return 'Fim';
    default:
      return 'Inválido';
  }
}

function main() {
  let clientesAlcool = 0;
  let clientesGasolina = 0;
  let clientesDiesel = 0;

  function mostrarMensagemAgradecimento() {
    console.log('MUITO OBRIGADO');
    console.log('Álcool: ' + clientesAlcool);
    console.log('Gasolina: ' + clientesGasolina);
    console.log('Diesel: ' + clientesDiesel);
  }

  function solicitarCodigo() {
    rl.question('Informe o código do combustível (1.Álcool 2.Gasolina 3.Diesel 4.Fim): ', (codigo) => {
      const codigoInt = parseInt(codigo);

      if (codigoInt >= 1 && codigoInt <= 4) {
        if (codigoInt === 4) {
          mostrarMensagemAgradecimento();
          rl.close();
        } else {
          switch (codigoInt) {
            case 1:
              clientesAlcool++;
              break;
            case 2:
              clientesGasolina++;
              break;
            case 3:
              clientesDiesel++;
              break;
          }

          solicitarCodigo();
        }
      } else {
        console.log('Código inválido. Por favor, informe um código válido.');
        solicitarCodigo();
      }
    });
  }

  solicitarCodigo();
}

main();