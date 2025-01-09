import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  let [joke, setJoke] = useState();
  const makejoke = () => {
    Axios.get("https://official-joke-api.appspot.com/jokes/random").then(
      (val) => {
        setJoke((joke = val.data.setup + " ... " + val.data.punchline));
      }
    );
  };
  const reset = () => setJoke((joke = ""));
  return (
    <div className="App">
      <div id="text">
        <strong>{/*Tittle*/}Joke generator!</strong>
      </div>
      <div id="btn4">
        <button className="btn" onClick={makejoke}>
          MAKE JOKE
        </button>
    </div>
      <p>{joke}</p>
    </div>
  );
}

export default App;
