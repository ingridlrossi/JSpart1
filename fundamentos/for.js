// const numeros = [100, 200, 300, 400, 500, 600];

// for(let i = 0; i < numeros.length; i++)
// {
//     console.log(numeros[i]);
// }

const number = [10, 6.5, 8, 7.5];
let somaNotas = 0;

for(let i = 0; i < number.length; i++){
    somaNotas += number[i];
}

const media = somaNotas / number.length;

console.log(`A média das notas é ${media}.`)
//---------------------------------------------------------------
const notas1 = [10, 6.5, 8 ,7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1,notas2,notas3];

let media1 = 0;

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media1 += notasGerais[i][j]/notasGerais[i].length;
  }
}

media1 = media1/notasGerais.length;

console.log(media1);