import './App.css';
import brasCubasImg from './assets/memorias-postumas.jpg';
import Capa from './Capa';

function App() {

  const informacoesLivro = {
    nome: "Memorias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    totalCapitulo: 2,
    capa: 'brasCubasImg',
    textoAlternativo: "Capa do livro Memórias Póstumas de Brás Cubas",
  };

  return (
  <> 
    <Capa
     imagemCapa={informacoesLivro.capa} 
     textoAlternativo={informacoesLivro.textoAlternativo} 
     />
  </>
  )
}

export default App
