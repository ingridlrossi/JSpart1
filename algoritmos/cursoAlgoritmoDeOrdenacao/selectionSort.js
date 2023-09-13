//sort é ordenar em inglês
const livros = require('./ordenarLivrosObjeto');
const menorValor = require('./ordenarLivros');

for(let i = 0; i < livros.length; i++)
{
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    console.log(i);
    console.log(`Livro Atual`, livros[i]);
    let livroMenor = livros[menor];
    console.log(`Livro menor`, livros[menor]);

    livros[i] = livroMenor
    livros[menor] = livroAtual
}

console.log(livros);