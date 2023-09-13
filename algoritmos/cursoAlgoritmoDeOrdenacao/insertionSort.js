const livros = require('./ordenarLivrosObjeto');

function insertionSort(lista) {
    for(let atual = 0; atual < lista.length; atual++)
    {
        let analise = atual;
        while(analise> 0 && lista[analise].preco < lista[analise-1].preco ) 
        //primeiro elemento não tem oq comparar pq nao tem nada a esquerda dele
        {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise-1];

            lista[analise] = itemAnterior
            lista[analise-1] = itemAnalise

            analise-- //tem que passar a condição para sair do while (para valer 0 e sair do while)
        }
    }
    console.log(lista)
}

insertionSort(livros);