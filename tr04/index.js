//Parámetro
//Argumento
//Retorno

function fazerPizza(tipoDoQueijo, tipoDoRecheio) {
    const pizza = `Pizza de ${tipoDoQueijo} com ${tipoDoRecheio}`;
    return pizza;
}

const pizzaDoCliente = fazerPizza('Gorgonzola', 'Bacon');
console.log(pizzaDoCliente)