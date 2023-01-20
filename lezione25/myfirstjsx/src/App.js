import "./App.css";
import HelloWorld from "./components/HelloWorld";
//import Orologio from "./components/Orologio";
import BottoneContatore from "./components/BottoneContatore";

function App() {
  return (
    <div className="App">
      <HelloWorld name="mondo"></HelloWorld>
      <BottoneContatore></BottoneContatore>
    </div>
  );
}

export default App;
