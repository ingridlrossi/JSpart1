//classes são funções - não precisa escrever function na frente
//a diferença é que as classes não são jogadas pra cima do código (hoisted) sem antes declarar a classe
//fica mais explicativo o código

class Livro {
    constructor(nome, editora, paginas){ //tem que ter constructor
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}.`)
    }
    descreverLivro(){
        console.log(`O livro ${this.nome} é da editora ${this.editora} e tem ${this.paginas} páginas.`)
    }
}

const NodeJS = new Livro("NodeJS", "Razões e impressões", 145);
NodeJS.anunciarTitulo();
NodeJS.descreverLivro();

