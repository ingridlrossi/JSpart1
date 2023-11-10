const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularTotalReceber(salarioFixo, totalVendas) {
  const comissao = 0.15 * totalVendas;
  const totalReceber = salarioFixo + comissao;
  return totalReceber.toFixed(2);
}

function main() {
  rl.question('Informe o nome do vendedor: ', (nomeVendedor) => {
    rl.question('Informe o salário fixo do vendedor: ', (salarioFixo) => {
      rl.question('Informe o total de vendas efetuadas: ', (totalVendas) => {
        const totalReceber = calcularTotalReceber(parseFloat(salarioFixo), parseFloat(totalVendas));

        console.log(`TOTAL = R$ ${totalReceber}`);

        rl.close();
      });
    });
  });
}

main();
