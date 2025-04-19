// console.log('1')
// console.log('2')
// setTimeout(() => console.log('3'), 3000)
// console.log('4')

//APi Web: é um sistema que está rodando na internet, pelo qual você consegue fazer requisição/pedido e ele vai te entregar uma informação baseado no que você pediu
async function escreverInformacoesPais(paisDesejado) {
    const info = await fetch(
        'https://restcountries.com/v3.1/name/' + paisDesejado
    );
    console.log(await info.json());
}

escreverInformacoesPais('japan');
