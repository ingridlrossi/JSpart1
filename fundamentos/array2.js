
const alunos = [
    'Ana', 'Amanda', 'Carlos', 
    'Bia', 'Sara', 'Lais', 'João'
]

const sala1 = alunos.slice(0, 4);
const sala2 = alunos.slice(4);

const sala3 = alunos.slice(0, alunos.length / 2);
const sala4 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);
console.log(sala3);
console.log(sala4);


