//for(let contador = 0; contador <= 20; contador ++) {
//    console.log(contador);    
// }

// 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

function somaProgressaoAritmetica(numeroInicial, numeroFinal, razao) {
    let soma = 0;

    for (
        let numeroAtual = numeroInicial;
         numeroAtual <= numeroFinal;
          numeroAtual += razao
        )
     {
        soma += numeroAtual;
    }

    return soma;
} 

console.log(somaProgressaoAritmetica(1, 10, 1));


