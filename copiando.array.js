const notas = [7, 8, 9, 9];

const novasNotas = [...notas]; //copia o array original pata eu modificar o novo

novasNotas.push(11);

console.log(`As novas notas são: ${novasNotas}`);
console.log(`As originais notas são: ${notas}`);