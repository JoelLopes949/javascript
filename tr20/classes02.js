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
    nome = '';
    equipe = '';
    idade = 0;
    correr() {
        console.log('Vrruuuuum');
    }
}

const corredor1 = new PilotoFormula1();

corredor1.nome = 'Ayrton Senna';
corredor1.equipe = 'McLaren';
corredor1.idade = 29;

console.log(corredor1);
corredor1.correr();