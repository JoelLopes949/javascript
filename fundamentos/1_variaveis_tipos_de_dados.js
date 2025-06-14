// Variáveis

// Comentário de linha

/*
    comentário de múltiplas linhas

*/

// 3 formas de criar variável

// var, let e const

// variável: é a forma que salvamos valores na memória

// Sintaxe: TIPO(var, let e const) NOME = VALOR;

//Strings = textos, '' ou ""

var nome = "João"; 

console.log(nome);
console.log("João");

// let -> substituir o var
let idade = 25;

// A diferença entre var e let é o escopo, {}

nome = "Pedro"
idade = 30;

console.log(nome, idade);

//Tanto var como let mudam os valores das variáveis

// const -> constante, não pode ser alterada
const pi = 3.14;

//A programação segue o padrão americano de números: 3,14 > 3.14

console.log(pi);

//var, let e const => let e const

// Tipos de dados

let numero = 41;
let numero2 = 41.5;

console.log(numero, numero2);

// JS não há diferença entre inteiros e números com casas decimais

let umTexto = "Meu número é 15#$'";

console.log(umTexto);

// Avaliar o tipo

// Typefof -> operador que avalia o tipo de dado
console.log(typeof numero);
console.log(typeof numero2);

console.log(typeof umTexto);

// boolean -> verdadeiro ou falso
let estaChovendo = false;

console.log(estaChovendo);

console.log(typeof estaChovendo);

console.log(10 > 5);

let semValor = null;

console.log(semValor);

// Tudo é objeto no JS

//Vários tipos de dados são originados com objetos
console.log(typeof semValor);

let indefinido;

console.log(indefinido);

console.log(typeof indefinido);

// Null = eu inicio algo nulo
// Undefined = eu esqueço de colocar o valor

// Arrays e objetos

// tipagem dinâmica
let variavel = 100;

console.log(typeof variavel);

variavel = "Agora sou uma string";

console.log(typeof variavel);

// Operações básicas

//Concatenar textos = unir
let primeiroNome = "João";
let sobrenome = "Silva";
let nomeCompleto = primeiroNome + " " + sobrenome;

console.log(nomeCompleto);

console.log("Olá, " + nomeCompleto + "!");

//Operações aritméticas
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5); 
console.log(10 / 5);

// Comparações
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);
// Toda comparação retorna um booleano

// >=, <=
// ==, === (identico)

console.log(10 > 10); // false

console.log(10 >= 10); // true

console.log(10 == 10);

console.log(10 === 10); 

console.log(10 == "10"); // true, porque o JS converte o tipo

console.log(10 === "10"); // false, porque o JS não converte o tipo

// = Não é ==

// = é atribuição de valor
// ==, === é comparação de valor

let a = 10;
let b = 20;

// console.log((a = b));

console.log(a);

console.log(a === b);
