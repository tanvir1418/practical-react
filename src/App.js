import { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";
import "./Styles.css";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div className="app">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <p>Text Value: {text}</p>
      <ExpensiveComponent />
    </div>
  );
};

export default App;
