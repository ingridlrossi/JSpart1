
const lista = [['joao', 'bruno', 'julia'], [9, 10, 8]];

function aluno(nome){
    if(lista[0].includes(nome)) //Procurar na lista da posição 0 se o nome está lá
    {
        // const nomesAlunos = lista[0];
        // const mediasAlunos = lista[1];

        const [nomesAlunos, mediasAlunos] = lista; //Nomeia a mesma coisa que fez na linha 7 e 8

        const indice = nomesAlunos.indexOf(nome); //Ver qual o indice do nome
        const indiceNome = mediasAlunos[indice];
        console.log(`A média final do ${nome} é ${indiceNome}.`);
    }
    else{
        console.log(`O ${nome} não foi encontrado.`);
    }
}

aluno("bruno");