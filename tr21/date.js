const agora = new Date();
const AnoNovo = new Date('01 01 2026');

console.log(agora.getDate());
console.log(agora.getFullYear());
console.log(agora.getHours());

console.log(agora);
console.log(AnoNovo)

console.log(agora.getTime());

const tempoRestante = AnoNovo.getTime() - agora.getTime();

console.log(tempoRestante)