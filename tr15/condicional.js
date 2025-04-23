const idadeUsuario = 69;
let textoConsole = '';

// if (idadeUsuario >= 65) {
//    textoConsole = ('Você tem direito de usufruir da gratuidade de serviço.')
// } else {
//    textoConsole = ('Apenas pessoas com 65 anos ou mais possuem direito à gratuidade do serviço')
// }


textoConsole = idadeUsuario >= 65 ? 'Você tem direito de usufruir da gratuidade de serviço.' : 'Apenas pessoas com 65 anos ou mais possuem direito à gratuidade do serviço';

console.log(textoConsole);