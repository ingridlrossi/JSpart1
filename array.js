//Array é lista

const notas = [10, 5, 8];
const media = (notas[0], notas[1], notas[2]) / notas.length;

//console.log(media);

//Atividade media

const notas_iniciais = [10, 6, 8];
const nota_colocar = [7];

const media_inicial = (notas_iniciais[0] + notas_iniciais[1] + notas_iniciais[2] + nota_colocar[0]) / (notas_iniciais.length + nota_colocar.length);

// console.log(media_inicial)

// USANDO O .PUSH

const notas1 = [10, 6, 8];
notas1.push(7); //acrescentar numero

const media_certa = (notas1[0] + notas1[1] + notas1[2]) / (notas1.length)
// console.log(media_certa)
// console.log(notas1)

//ATIVIDADE REMOVER ULTIMO NUMERO

const notas2 = [10, 6, 8, 10];

notas2.pop(); //remove ultimo numero

console.log(notas2)