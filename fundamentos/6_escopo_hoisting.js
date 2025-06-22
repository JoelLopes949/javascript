// Escopo

// Escopo global
// { } => let, const

let nome = "Joel"; // variável no escopo global

function exibirNome() {
    console.log(nome); // o escopo global é acessível de qualquer lugar do meu programa
}
exibirNome();

console.log("Nome: " + nome)

//Escopo local =>  { }
function exibirIdade() {
    const idade = 20;
    console.log("Sua idade é " + idade)
}
exibirIdade();
// console.log(idade) => erro ao querer usar o escopo local fora da função

const idade = 30; // o certo é colocar o escopo fora da função, tendo então duas variáveis tanto local como global

// Escopo de bloco
if(true) {
    const idade = 15;
    console.log("Idade if: " + idade)
}

console.log("Idade global: " + idade)

for(let i = 0; i < 5; i++) {

    const idade = 45;
    
    console.log("Idade loop: " + idade)
}

// Hoisting 
x;

x = 10;
console.log(x);

var x = 5;
console.log(x);
// JS permiti criação da variável antes da execução então posso ter varias variáveis com o mesmo nome antes da execução usando "var"

// let e const => vão anular o hoisting de variáveis


digaOi(); //Posso fazer antes do código
function digaOi() {
    console.log("Oi!");
}

// const não cai no hoisting
// testando();   vai receber erro, porque a variável ainda não foi declarada
const testando =  () => {
    console.log("Olá")
};

testando();

// JS moderno, anula de certa forma o hoisting


// Loop infinito: não fazer isso
//for(let i = 0; i  < 5; i--) {
//    console.log(i);
//} 


