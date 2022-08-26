import './App.css';
import { useState } from 'react';
import Cards from './components/cards';

function App() {
  const [counter, setcounter] = useState(0)
  const [counter1, setcounter1] = useState(0)
  const [counter2, setcounter2] = useState(0)
  
  function handleCounter (id) {
    setcounter(counter + 1)
    id === 1 ? setcounter1(counter1 + 1) : setcounter2(counter2 + 1)
  }
  return (
    <div className="App">
      <Cards id={1} handleCounter={handleCounter} counterGlobal={counter1}/>
      <Cards id={2} handleCounter={handleCounter} counterGlobal={counter2}/>
      <div className="container-cards">Contador Padre: {counter}</div>
    </div>
  );
}

export default App;
