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
