import './App.css';
import Calculator from './components/calculator'
import Title from './components/title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator/>
        <Title/>
      </header>
    </div>
  );
}

export default App;
