import './App.css';
import Calculate from './components/calculator'
import Input from './components/inputs'

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello
        <Calculate/>
        <Input/>
      </header>
    </div>
  );
}

export default App;
