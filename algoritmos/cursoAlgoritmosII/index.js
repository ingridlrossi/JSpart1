const {Livros1, Livros2} = require('./livros');

function juntarListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let posicaoAtualFinal = 0;

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length)
    {
        let conteudoAtualLista1 = lista1[posicaoAtualLista1];
        let conteudoAtualLista2 = lista2[posicaoAtualLista2];
        console.log(`comparando ${conteudoAtualLista1.nome} com ${conteudoAtualLista2.nome}.`)

        if(conteudoAtualLista1.preco < conteudoAtualLista2.preco){
            listaFinal[posicaoAtualFinal] = conteudoAtualLista1;
            posicaoAtualLista1++;
        }
        else{
            listaFinal[posicaoAtualFinal] = conteudoAtualLista2;
            posicaoAtualLista2++;
        }

        posicaoAtualFinal++;
    }

    while(posicaoAtualLista1 < lista1.length)
    {
        listaFinal[posicaoAtualFinal] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        posicaoAtualFinal++;
    }
    while(posicaoAtualLista2 < lista2.length)
    {
        listaFinal[posicaoAtualFinal] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        posicaoAtualFinal++;
    }


    return listaFinal;
}



// juntarListas(Livros1, Livros2)

console.log(juntarListas(Livros1, Livros2))