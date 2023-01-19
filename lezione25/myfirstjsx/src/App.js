import './App.css';
import HelloWorld from './components/HelloWorld';

function Ciao (props) {
  return <p>Ciao, {props.name}</p>
}


function App() {  
  return (
    <div className="App">
      <HelloWorld name="mondo"></HelloWorld>
      <Ciao name="Paolo"></Ciao>
    </div>
  );
}

export default App;
