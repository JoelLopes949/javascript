const data = new Date();
const horaDoDia = data.getHours();
const body = document.getElementById('body');
const h1 = document.getElementById('tag-bom-dia')

let mensagem = '';
let classeCSS = '';

if (horaDoDia >=1 && horaDoDia < 6) {
    mensagem = 'Boa madarugada';
    classeCSS = 'madrugada'
} else if (horaDoDia >= 6 && horaDoDia <= 12) {
    mensagem = 'Bom dia!!';
    classeCSS = 'manha'
} else if (horaDoDia < 18) {
    mensagem = 'Boa tarde!!';
    classeCSS = 'tarde'
} else if (horaDoDia >= 18 && horaDoDia < 24) {
    mensagem = 'Boa noite!!';
    classeCSS = 'noite'
} else {
    mensagem = 'Horario não registrado'
}

body.classList.add(classeCSS)
h1.innerText = mensagem