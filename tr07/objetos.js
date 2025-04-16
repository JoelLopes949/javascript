// const = constante, o valor não pode ser alterado
// let = Valor poderá ser alterado

//Objetos são estruturas que servem para que a gente possa agrupar varios dados que são pertinentes a uma mesma criatura, entidade

const idade = 27;
const nome = 'Alfred';
const endereco = 'Rua Nogueira';
const numeroIdentificador = 123456;

//Forma de fazer objetos
const dadosAlfred = {
    nome: 'Alfred',
    idade: 27,
    endereco: 'Rua Nogueira',
    numeroIdentificador: 123456,
};

console.log(`Seu nome é ${dadosAlfred.nome} de ${dadosAlfred.idade} anos mora na ${endereco}, rg: ${numeroIdentificador}`);
console.log(dadosAlfred)