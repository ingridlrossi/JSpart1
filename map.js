// Com forEach
const notas = [8, 9, 6, 7, 10];

notas.forEach((nota) => {
    nota = nota + 1;
    console.log(nota);
});

//MAP É MAIS APROPRIADO PARA REESCREVER ARRAYS

const notas2 = notas.map((nota) =>{ //Atribui um novo array pq ele nao modifica o original
    
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notas2);

//--------------------------------------------------------------------------------------------

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomes1 = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomes1);

// ou
// const nomes1 = nomes.map((nome) => nome.toUpperCase());

//----------------------------------------------------------------------------------------------
// ["A", "l", "u", "r", "a"]

const nome4 = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome4.length; i++) {
 nomeMaiusculas += nome4[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura
