import { useState } from "react";
import "./Styles.css";

const App = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <div className="app">
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>Increase Async</button>
      <h1>{number}</h1>
    </div>
  );
};

export default App;
