import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Orologio from "./components/Orologio";
import BottoneContatore from "./components/BottoneContatore";
import Esempio from "./Esempio";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <HelloWorld name="mondo"></HelloWorld>
          </td>
        </tr>
        <tr>
          <td>
            <BottoneContatore></BottoneContatore>
            <Esempio></Esempio>
          </td>
        </tr>
      </table>
      <p>ciao</p>
      <div>
        <Counter></Counter>
      </div>
      <main>
        <Orologio></Orologio>
      </main>
    </div>
  );
}

export default App;
