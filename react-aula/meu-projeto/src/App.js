import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'; 
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Joel" />
      <SayMyName nome="Matheus" />
      <SayMyName nome="Guanabara" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Rodrigo" 
        idade="29" 
        profissao="Programador" 
        foto="https://randomuser.me/api/portraits/men/1.jpg" 
      />
      <List />
    </div>
  );
}

export default App;
