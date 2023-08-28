const notas = [10, 6.5, 8 ,7.5];

let soma = 0;

//É parecido com for of, só que tem a vantagem
//de percorrer o valor dos elementos e os índices.
notas.forEach(function(nota, indice){ //função callback -> função que é parâmetro de outra
    soma += nota;
    console.log(indice);
});

console.log(soma);