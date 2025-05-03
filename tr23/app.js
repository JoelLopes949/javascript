const caixaTexto =  document.getElementById('texto-transcrito')
const botaoTrancricao = document.getElementById('transcrever')
const reconhecimento = new webkitSpeechRecognition();

reconhecimento.onresult = (evento) => {
    const transcricao = evento.results[0][0].transcript;
    caixaTexto.innerText = transcricao;
};

botaoTrancricao.addEventListener('click', () => reconhecimento.start());

