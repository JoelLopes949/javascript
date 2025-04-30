const corredor1 = {
    nome: 'Ayrton Senna',
    equipe: 'McLaren',
    idade: 29,
    correr: function() {
        console.log("Vruuuuuum")
    }, //Quando tem uma função dentro de um objeto ela é chamada de método
};


console.log(corredor1.nome)
corredor1.correr();
console.log(corredor1)