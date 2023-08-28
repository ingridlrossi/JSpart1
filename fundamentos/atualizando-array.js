
const alunos = [
    'Ana', 'Amanda', 'Carlos', 
    'Bia', 'Sara', 'Lais', 'João'
]

// A Amanda e Carlos sairam da turma e entrou o Bruno

alunos.splice(1, 2, "Bruno");

console.log(alunos);

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

               //A partir desse indice, quantidade removida, acrescentar
animaisDoAquario.splice(1, 0, '🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

