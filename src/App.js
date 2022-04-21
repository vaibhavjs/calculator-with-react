import { useState } from "react";
import stringMath from "string-math";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const deleteScreen = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(stringMath(result));
    } catch (err) {
      setResult("syntax error");
    }
  };
  return (
    <div className="container">
      <form>
        <input className="current-operand output" type="text" value={result} />
      </form>

      <div className="buttons">
        <button className="ac span-two" onClick={clear}>
          AC
        </button>
        <button onClick={deleteScreen}>Del</button>

        <button name="/" onClick={clickHandler}>
          &divide;
        </button>
        <button name="7" onClick={clickHandler}>
          7
        </button>
        <button name="8" onClick={clickHandler}>
          8
        </button>
        <button name="9" onClick={clickHandler}>
          9
        </button>
        <button name="*" onClick={clickHandler}>
          &times;
        </button>
        <button name="4" onClick={clickHandler}>
          4
        </button>
        <button name="5" onClick={clickHandler}>
          5
        </button>
        <button name="6" onClick={clickHandler}>
          6
        </button>
        <button name="-" onClick={clickHandler}>
          -
        </button>
        <button name="1" onClick={clickHandler}>
          1
        </button>
        <button name="2" onClick={clickHandler}>
          2
        </button>
        <button name="3" onClick={clickHandler}>
          3
        </button>
        <button name="+" onClick={clickHandler}>
          +
        </button>
        <button name="0" onClick={clickHandler}>
          0
        </button>
        <button name="." onClick={clickHandler}>
          .
        </button>
        <button className="span-two" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
