import './App.css';
import HelloWorld from './components/HelloWorld';
import Orologio from './components/Orologio';



function App() {  
  return (
    <div className="App">
      <HelloWorld name="mondo"></HelloWorld>
      <Orologio></Orologio>
    </div>
  );
}

export default App;
