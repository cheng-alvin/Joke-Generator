import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  let [joke, setJoke] = useState();
  const makejoke = () => {
    Axios.get("https://official-joke-api.appspot.com/jokes/random").then(
      (val) => {
        console.log(val);
        console.log(val.data.setup);
        console.log(val.data.punchline);
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
      <div id="btn4">
        <button className="btn" onClick={reset}>
          RESET
        </button>
      </div>
      <p>{joke}</p>
      <p id="texts">
        Thanks to everyone who respond to my morning jokes everyday!
      </p>
      <p id="text1">
        for website improvements and bugs please report to Alvin cheng
      </p>
    </div>
  );
}

export default App;
