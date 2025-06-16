// IF

// decisões ao longo do código 

// if -> recurso
// () -> expressão que vai ser avaliada
// {} -> bloco de código que é executado se a expressão for verdadeira

// comparação / expressões -> booleanos

const hora = 23;

if(hora < 12) {
    console.log('Bom dia!');
}

//  se if for falso, o código não é executado {}

// toda coisa verdadeira > true
// que não é? false

// Else, um bloco que vai ser executado se o if for falso

if(hora < 12) {
    console.log('Bom dia!');
} else {
    console.log('Boa tarde!');
}

const temperatura = 32;

if (temperatura <= 18) {
    console.log('Está frio, coloque um casaco!');
} else {
    console.log('Está calor, coloque uma roupa leve!');
}

// não posso ter só o else, preciso ter o if

// mais de uma posibildade
// Operador else if > permite criar mais de uma condição
const velocidade = 30;
if (velocidade < 20) {
    console.log('Você está andando devagar!');
} else if (velocidade < 60) {
    console.log('Você está andando na velocidade média!');
} else if (velocidade <= 100) {
    console.log('Você está andando rápido!');
} else {
    console.log('Você está acima da velocidade permitida!');
}

// if: 1 apenas, não precisa de ninguém 
// else if: posso ter vários, mas preciso de if
// else: 1 apenas, precisa de if e não do else if

// switch
//ele é bom para analizar casos com valores fixos. EX: dia da semana

// if, geralmente com intervalos de valores
//switch, geralmente com valores específicos

// if vai dominar os programas na maioria das vezes

let diaDiaSemana = 6;

switch (diaDiaSemana) {
    case 1: 
        console.log("Segunda-feira");
        break; // interrompe o switch, não executa os outros casos
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default: // caso não seja nenhum dos anteriores
        console.log("Dia inválido");
        break; // não é obrigatório, mas é uma boa prática
}

// Operadores lógicos
// AND &&
// OR ||
// NOT !

// Tabela verdade

//Vão permitir lógicas mais complexas

// EXP1 && EXP2 -> true se as duas forem verdadeiras
// EXP1 || EXP2 -> true se pelo menos uma for verdadeira
// !EXP1 -> inverte o resultado boolean = true vira false e vice-versa

// Vamos verificar se o usuário pode dirigir
let idadeUsuario = 19;
let TemCarteira = true;

// As expressões sempre viram boleanos > true >> true = true, false >> true = false
if (idadeUsuario >= 18 && TemCarteira) {
    console.log('Você pode dirigir!');
} else {
    console.log('Você não pode dirigir!');
}

// cadastro em um sistema
// ele pode fazer com rg ou passaporte
const temRG = true;
const temPassaporte = false;

if (temRG || temPassaporte) {
    console.log('Você pode se cadastrar!');
} else {
    console.log('Você não pode se cadastrar!'); 
}

// ! -> inverte o resultado
const estaChovendo = true;

// !true > false
if (!estaChovendo) {
console.log("Não está chovendo");
}