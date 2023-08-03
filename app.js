//tipo Number
const num1 = 2;
const num2 = .3;
const num3 = 4e+2;

const soma = num1 + num2 + num3;

//console.log(soma);

//---------------------------------------
//tipo string
const texto1 = "oi";
const citacao = 'O Leo disse "oi!"';
//existe uma 3ª forma de representar string, chama Template string ou Template literal
const junto = texto1 + citacao; // concatenação
//console.log(junto);

//---------------------------------------
// "/u" é usado para caracteres de escape, sinalizar ao JavaScript de que estamos falando de códigos Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

//console.log(cifrao)
//console.log(aMaiusculo)
//console.log(tique)
//console.log(hiragana)

//---------------------------------------
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase(); //transforma tudo em letra minuscula

//console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123" //quantidade de caractere
//console.log(senha.length) // 13 caracteres 

//---------------------------------------
//Variáveis

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    // console.log(respostaDeTudo, idade, pi)

}
// console.log(respostaDeTudo, idade, pi)

let numb = null;
numb = 2;
//console.log(numb)

//Operador ternário
//console.log(numb >= 1 ? "maior" : "falso")
