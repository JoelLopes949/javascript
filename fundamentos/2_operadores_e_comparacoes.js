// Operadores e comparações

// +, -, *, /, %, ** (exponenciação)

console.log(5 + 3); // Adição
console.log(5 - 3); // Subtração    
console.log(5 * 3); // Multiplicação
console.log(5 / 3); // Divisão
console.log(5 % 3); // Módulo (resto da divisão)
console.log(5 ** 3); // Exponenciação (5 elevado a 3)
 // Numero <operador> Numero2

 console.log("12" + 5)
 // soma de string com número


 // módulo - % -> resto da divisão
console.log(12 % 2); // 0, pois 12 é divisível por 2
console.log(13 % 2); // 1, pois 13 não é divisível por 2

// exponenciação - ** 
console.log(2 ** 3); // 8, pois 2 elevado a 3 é 8

// ordem matemática
console.log(2 + 3 * 4); // 14, pois a multiplicação é feita antes da adição
console.log((2 + 3) * 4); // 20, pois os parênteses alteram a ordem de execução

// Operadores
// <, >, <=, >=, ==, ===, !=, !==
console.log(5 < 3); // false
console.log(5 > 3); // true
console.log(12 == "12"); // true, pois o valor é igual
console.log(12 === "12"); // false, pois o tipo é diferente
console.log(12 != "12"); // false, pois o valor é igual
console.log(12 !== "12"); // true, pois o tipo é diferente

// a comparação de strings é por == ou ===
console.log("banana" == "banana"); // true
console.log("banana" === "banana"); // true
console.log("banana" == "Banana"); // false, pois as strings são diferentes
console.log("banana" === "Banana"); // false, pois as strings são diferentes

// toda comparação gera um resultado booleano

// operador de pos incremento e pre incremento
let num = 1
console.log(num++); // 1, pois o valor é retornado antes do incremento
console.log(num); // 2, pois o valor foi incrementado
console.log(++num); // 3, pois o valor é incrementado antes do retorno
console.log(--num); // 2, pois o valor é decrementado antes do retorno
//muito utilizado em loops (for, while, etc)

num = num + 5;
console.log(num); // 7, pois o valor foi incrementado em 5
num += 5; // é o mesmo que num = num + 5
console.log(num); // 12, pois o valor foi incrementado em 5 novamente
num -= 5; // é o mesmo que num = num - 5
console.log(num); // 7, pois o valor foi decrementado em 5
num *= 2; // é o mesmo que num = num * 2
console.log(num); // 14, pois o valor foi multiplicado por 2

const idade  = 12;
const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir); 

// Condicionais (if, else, switch)
if(idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}