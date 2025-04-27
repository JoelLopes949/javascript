const prompt = require("prompt-sync")();

let nomeAluno = 'Joel Lopes';
let notasLancadas = 0;
let pontosSomados = 0;
let media = 0;
let notas = []; // Array para armazenar as notas

// Estrutura de repetição
while (notasLancadas < 12) {
    let nota = parseFloat(prompt(`Insira a nova nota do ${nomeAluno}: `));
    notas.push(nota); // Armazena a nota no array
    pontosSomados += nota;
    notasLancadas++;
    media = pontosSomados / notasLancadas;
    console.log(`Media até ${notasLancadas}a nota: ${media}`);
}

console.log(`Notas lançadas: ${notas.join(", ")}`); // Exibe as notas
console.log(`Media final do ${nomeAluno}: ${media}`);

// Código condicional
if (media >= 6) {
    console.log('Aluno Aprovado');
} else {
    console.log('Aluno Reprovado');
}