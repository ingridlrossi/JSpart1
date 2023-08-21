const notas = [10, 6.5, 8 ,7.5];

let soma = 0;

for (let elemento of notas){
    soma += elemento; // equivale a soma = soma + elemento
    
}

console.log(soma);


//Criar um Array dinâmico
const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);