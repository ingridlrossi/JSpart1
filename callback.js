
const nomes = ["Evandro", "Loren", "Cleude"];

nomes.forEach(function(nome){ //função callback -> função que é parâmetro de outra
    console.log(nome);
});



nomes.forEach((nome) => { //função callback -> função que é parâmetro de outra
    console.log(nome);
});



function imprimeNome(nome){
    console.log(nome);
};

nomes.forEach(imprimeNome);