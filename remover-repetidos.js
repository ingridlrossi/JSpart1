const nomes = ["Maria", "Maria", "João", "João", "João", "Laura", "Caio"];

const nomesSet = new Set(nomes); //Usando a função Set que tira as duplicatas

const nomesAtt = [...nomesSet]; //Passando do Set de volta para Array

console.log(nomesAtt);
