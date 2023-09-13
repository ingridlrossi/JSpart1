// 1. Obter a nota do 1º bimestre;
// 2. Obter a nota do 2º bimestre;
// 3. Obter a nota do 3º bimestre;
// 4. Realizar o cálculo da média para cada aluno (maior ou igual a 7 para aprovação);
// 5. Informar se o aluno foi “aprovado ou reprovado”;
// 6. Informar a média obtida pelo aluno.

function fazmedia(nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3)/3;
    console.log(`A média final é de ${media}.`)
    if(media > 6){
        console.log("O aluno está aprovado")
    }
    else {
        console.log("O aluno está reporvado")
    }
}

fazmedia(6, 6, 6);