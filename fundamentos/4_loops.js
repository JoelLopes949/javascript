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

//while

