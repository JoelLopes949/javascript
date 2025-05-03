const elementoTexto = document.getElementById('texto');
const elementoBotao =  document.getElementById('falar');

function falar() {
    //dizer qual é o texto que deve ser lido
    const textoASerFalado = elementoTexto.value;
    //configurar uma fala
    const configuracaoFala = new SpeechSynthesisUtterance(textoASerFalado);
    //colocar o computador para falar
    window.speechSynthesis.speak(configuracaoFala);
}

elementoBotao.addEventListener('click', falar);