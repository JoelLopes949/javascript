import './App.css';

function App() {
  const name = "Joel"
  const newName = name.toLocaleUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = "https://picsum.photos/200"

  return (
    <div className="App">
      <h1>Olá, {name}</h1>
      <p>Seu nome em maiúsculo é {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
