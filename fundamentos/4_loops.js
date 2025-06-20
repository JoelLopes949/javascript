// for -> mais comum

// estrutura de repetição = loop
// executan N vezes um código

// for(INCREMENTO; CONDIÇÃO; INCR.) {}

// Incremento = i, j, k, m
// Condição = i < 10
// Incrementador = i++ (cada loop, soma um)

// loop que itera de 0 até
for(let i = 0; i <= 4; i++) {
    console.log("Loop for - o i é: " + i)    
}

// arrays = listas
// contém geralmente itens do mesmo tipo de dado
// lista de strings, de números...

const frutas = ["maçã", "banana", "laranja"];

console.log(frutas);

// ele é zero based
console.log(frutas[0]);
console.log(frutas[2]);

// i -> 0, i -> 1, i -> 2
for(let i = 0; i < 4; i++) {
    console.log("Fruta: " + frutas[i])
}

//lista.length => quantidade de elementos
for(let i = 0; i < frutas.length; i++) {
    console.log("Fruta: " + frutas[i])
}

// while
// a gente não sabe da condição final
let p = 0

while(p < 5) {
    console.log("Loop while: " + p)

    p++
}

let aleatorio = -1;

// console.log(Math.floor(Math.random() * 10) + 1);

while(aleatorio != 10) {
    aleatorio = Math.floor(Math.random() * 10) + 1;

    console.log("Num. aleatório " + aleatorio);
}

// while é bom quando não sei quando vai acabar

// do while
// while que garante 1 execução
// Super incomum, chance de ver em um programa beira o zero
do {
    console.log("Teste")
} while(1 > 2);


var j = 0
do {
    console.log("J: " + j)
    j++
} while(j < 10)
//No que focar? Aprender bem o for


// Exercícios com Condicionais e Loops
// Soma de números pares de 0 a 20
let soma = 0;
let anterior = 0;

for(let i = 0; i <= 20; i++) {
    // verificar números pares
    if(i % 2 == 0) {
        let resultado = soma + i;
        console.log(`${soma} + ${i} = ${resultado}`);
        soma = resultado;
    }
}

console.log("Soma final:", soma);


// Contar quantas consoantes tem na palavra
const palavra = "JavaScript"
let consoantes = 0;
// textos são parecidos com arrays
// cada letra é um elemento
console.log(palavra[0

for() {

}