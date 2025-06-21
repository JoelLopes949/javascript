// Funcões: Servem para modularizar o código

// function NOME(ARG1, ARG2, ARGN...)  { Executa}

// Parámetros ou argumentos são opcionais
function digaOi() {
    console.log("Oi! Tudo bem? ");
}

//Executar/Indicar/Chamar a função
digaOi();
digaOi();

// Argumentos/Parámetros
// Os parámetros podem ser de qualquer tipo
function soma(a, b) {

    const soma = a + b;
    
    console.log("Soma: " + soma)
}

soma(2,5)
soma(2,15)
soma(15,12)

// Return -> retorno de dados de uma função
// return x

function multiplicação(a, b) {
    const mult = a * b
    return mult;
}

const resultado = multiplicação(2, 2);

console.log(resultado);

const somaDois = resultado + 10 

console.log(somaDois);

// A função não precisa de parámetro para ser criado, não precisa de retorno (são opcionais)

//FUNÇÃO ANÔNIMA