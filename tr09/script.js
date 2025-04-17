const botao = document.getElementById('botao-funcao');


botao.addEventListener('click', function () {
    alert('Botao foi criada pelo usuário');
});

//Aqui não precisei chamar nenhuma funcão antes do addEventListener porque já coloquei dentro dela de forma anônima e porque não vou usar em outro lugar