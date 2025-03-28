document.querySelector('input[type="submit"]').addEventListener('click', contar);

function contar() {
    let inicio = document.getElementById('txtin').value;
    let fim = document.getElementById('txtfim').value;
    let passo = document.getElementById('txtpasso').value;
    let res = document.getElementById('res');

    // Verifica se os valores foram preenchidos
    if (inicio === '' || fim === '' || passo === '') {
        res.innerHTML = 'Por favor, preencha todos os campos!';
        return;
    }

    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    // Ajusta o passo se for 0 ou negativo
    if (passo <= 0) {
        alert('Passo inválido! Considerando PASSO = 1');
        passo = 1;
    }

    res.innerHTML = 'Contando: <br>';
    // Contagem crescente ou decrescente
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} 👉 `;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            res.innerHTML += `${i} 👉 `;
        }
    }
    res.innerHTML += '🏁';
}
