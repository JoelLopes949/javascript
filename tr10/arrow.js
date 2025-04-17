function subtracao(a, b) {
    return a - b;
}

const subtracao2 = (a, b) => a - b;

function somar2(a) {
    return a + 2;
}

const somar2Versao2 = a => a + 2;

function diaDoMes() {
    return new Date().getDate();
}

function superFuncao(a, b) {
    const subtracao = a -b;
    subtracao = subtracao - 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}

const superFuncaoVersao2 = (a, b) => {
    const subtracao = a -b;
    subtracao = subtracao - 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}

const diaDoMesVersao2 = () => new Date().getDate();


console.log(diaDoMesVersao2())
