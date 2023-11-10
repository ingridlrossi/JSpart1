const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encontrarMenorElemento(vetor) {
  let menorValor = vetor[0];
  let posicao = 0;

  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] < menorValor) {
      menorValor = vetor[i];
      posicao = i;
    }
  }

  return { menorValor, posicao };
}

function main() {
  rl.question('Informe o tamanho do vetor (1 < N < 1000): ', (tamanho) => {
    const N = parseInt(tamanho);

    rl.question(`Informe os ${N} valores do vetor, separados por espaço: `, (valores) => {
      const vetorX = valores.split(' ').map(Number);

      if (vetorX.length !== N) {
        console.log('Número incorreto de elementos no vetor.');
        rl.close();
        return;
      }

      const { menorValor, posicao } = encontrarMenorElemento(vetorX);

      console.log('Menor valor:', menorValor);
      console.log('Posicao:', posicao);

      rl.close();
    });
  });
}

main();