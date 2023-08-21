const alunos = ['Ana', 'Bia', 'Carlos', 'Dante'];
const medias = [6, 5, 8, 9];

const aprovados = alunos.filter((_, indice) => { //posso usar _ no parâmetro quando não estou utilizando ele, pq preciso nomear o primeiro para acessar o segundo
    return medias[indice] > 7;
});

console.log(aprovados);