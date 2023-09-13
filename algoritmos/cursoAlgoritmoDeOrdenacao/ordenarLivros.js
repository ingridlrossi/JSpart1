const livros = require('./ordenarLivrosObjeto');

function menorValor(listaProdutos, posicaoInicial)
{
    let menor = posicaoInicial;
    for (let atual = posicaoInicial; atual < listaProdutos.length; atual++){
        if(listaProdutos[atual].preco < listaProdutos[menor].preco){
            menor = atual;
        }
    }
    return menor
}

module.exports = menorValor;

//console.log(livros[menor].preco);