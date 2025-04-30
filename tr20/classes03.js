// const corredor1 = {
//     nome: 'Ayrton Senna',
//     equipe: 'McLaren',
//     idade: 29,
//     correr: function() {
//         console.log("Vruuuuuum")
//     }, //Quando tem uma função dentro de um objeto ela é chamada de método
// };


// const corredor2 = {
//     nome: 'Max Verstappen',
//     equipe: 'Red Bull Racing',
//     idade: 26,
//     correr: function() {
//         console.log('Vrruuuuum');
//     },
// };

// const corredor3 = {
//     nome: 'Lewis Hamilton',
//     equipe: 'Mercedes',
//     idade: 32,
//     correr: function() {
//         console.log('Vrruuuuum');
//     },
// };

// const corredor4 = {
//     nome: 'Charles Leclerc',
//     equipe: 'Ferrari',
//     idade: 26,
//     correr: function() {
//         console.log('Vrruuuuum');
//     },
// };

// const corredor5 = {
//     nome: 'Lando Norris',
//     equipe: 'McLaren',
//     idade: 27,
//     correr: function() {
//         console.log('Vrruuuuum');
//     },
// };

class PilotoFormula1 {
    constructor(nomeDoPiloto, equipeDoPiloto, idadeDoPiloto) {
            this.nome = nomeDoPiloto;
            this.equipe = equipeDoPiloto;
            this.idade = idadeDoPiloto;
        }

    correr() {
        console.log('Vrruuuuum');
    }
}

const corredor1 = new PilotoFormula1('Arton Senna', 'McLaren', 29);
const corredor2 = new PilotoFormula1('Max Verstappen', 'Red Bull Racing', 26);
const corredor3 = new PilotoFormula1('Lewis Hamilton', 'Mercedes', 32);
const corredor4 = new PilotoFormula1('Charles Leclerc', 'Ferrari', 26);
const corredor5 = new PilotoFormula1('Landon Norris', 'McLaren', 27);

console.log(corredor1);
console.log(corredor2);
console.log(corredor3);
console.log(corredor4);
console.log(corredor5);