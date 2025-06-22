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
const saudacao = function(nome) {
    console.log("Olá " + nome)
}

saudacao("Joel")


//Função anônima 2: callback
// É executar uma função como argumento
function operacao(a, b, callback) {
    return(a, b);
}

let resultadoOperacao = operacao(10, 8, soma)

console.log(resultadoOperacao);

let resultadoDois = operacao(5, 5, function (x, y) {
    return x - y;
})

console.log(resultadoDois)

// Arrow functions ou Funções de flecha
// com uma sintaxe menor

// (arg1, arg2) => {}
const dividir  = (a, b) => {
    return a / b;
}

console.log(dividir(10, 5));

const multiplicacaoArrow = (a, b) => a * b;

// quando ela só tem uma linha, não precisa de: 
// {}
// return

console.log(multiplicacaoArrow(10, 10))

const msg = () => console.log("Testando")
msg();


// função que detecta o tipo de dado
function detectarTipo(valor) {
    if(typeof valor === "string") {
        return "String"
    } else if(typeof valor === "number") {
        return "Number"
    } else if(typeof valor === "boolean") {
        return "Boolean"
    } else {
        return "Tipo desconhecido"
    }
}

console.log(detectarTipo("test"))
console.log(detectarTipo(true))
console.log(detectarTipo(2))


// Condicional ternária 
// condição/expressão ? TRUE : FALSE

const idade = 14;

const ehMaioDeIdade = idade >= 18 ? "É maior" : "Não é maior"

console.log(ehMaioDeIdade);