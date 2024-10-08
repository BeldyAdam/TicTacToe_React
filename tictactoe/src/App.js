import logo from './logo.svg';
import './App.css';
import { Jatekter } from './components/Jatekter';
import { lista } from "./adat.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        TicTacToe - React
      </header>
      <article>
        <Jatekter sor={lista}/>
      </article>
    </div>
  );
}

export default App;
