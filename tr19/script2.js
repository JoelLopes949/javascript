function somarPontoExtra(notaAluno, pontoExtra = 0.5) {
    const notaComAcrescimo = notaAluno + pontoExtra;
    return notaComAcrescimo;
}

console.log("A nota final do aluno foi: " + somarPontoExtra(7.8 , 1.5));
