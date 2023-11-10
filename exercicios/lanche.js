const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularValorConta(codigo, quantidade) {
  let preco = 0;

  switch (codigo) {
    case 1:
      preco = 4.00;
      break;
    case 2:
      preco = 4.50;
      break;
    case 3:
      preco = 5.00;
      break;
    case 4:
      preco = 2.00;
      break;
    case 5:
      preco = 1.50;
      break;
    default:
      console.log('Código inválido.');
      rl.close();
      return;
  }

  const total = preco * quantidade;
  console.log(`Total: R$ ${total.toFixed(2)}`);
}

function main() {
  rl.question('Informe o código do item e a quantidade, separados por espaço: ', (entrada) => {
    const [codigo, quantidade] = entrada.split(' ').map(Number);

    if (isNaN(codigo) || isNaN(quantidade)) {
      console.log('Entrada inválida.');
      rl.close();
      return;
    }

    calcularValorConta(codigo, quantidade);

    rl.close();
  });
}

main();
