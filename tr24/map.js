const listaNotas = [5, 6, 2, 3, 4, 5, 7, 8, 10, 2, 6, 5];
// [true, true, false, false, false, true, true, true, true, false, true , true];

// map é uma função/método que existe para um array/lista de valores no J.S que te permite fazer uma descrição de algo que você quer que aconteça para cada elemento de uma lista
const resultadosAprovacao = listaNotas.map(function (elemento) {
    if (elemento >= 5) {
        return true
    }
        return false;
});

const listaComAcrescimo = listaNotas.map(elemento => elemento + 1);
const resultadosAprovacaoAposAcrescimo = listaComAcrescimo.map((nota) => nota >= 5
);

console.log(listaComAcrescimo)
console.log(resultadosAprovacao);
console.log(resultadosAprovacaoAposAcrescimo)
