const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function substituirNegativosENulos(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] <= 0) {
      vetor[i] = 1;
    }
  }
}

function mostrarVetor(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    console.log(`X[${i}] = ${vetor[i]}`);
  }
}

function main() {
  let vetorX = [];

  function solicitarValores(indice) {
    if (indice < 10) {
      rl.question(`Informe o valor para X[${indice}]: `, (valor) => {
        vetorX.push(parseInt(valor));
        solicitarValores(indice + 1);
      });
    } else {
      substituirNegativosENulos(vetorX);
      mostrarVetor(vetorX);
      rl.close();
    }
  }

  solicitarValores(0);
}

main();
