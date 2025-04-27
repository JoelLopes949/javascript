//Array/Lista (coleção de dados)

const lista = ['a', 'b', 'c', 'd', 'a', 'e']
//console.log(lista.length)

const conjunto = new Set(lista); //Aqui os elementos não vão se repetir
console.log(conjunto);

const listaElementosUnicos = Array.from(conjunto)
console.log(listaElementosUnicos)

const ListaEmails = [
    'daniel.porto@example.com',
    'joao.lira@example.com',
    'daniela.dias@example.com',
    'carina.sanches@example.com',
    'carina.sanches@example.com'
];
const ListaEmailsUnicos = Array.from(new Set(ListaEmails))
console.log(ListaEmailsUnicos)