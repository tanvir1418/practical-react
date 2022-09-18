import { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";
import "./Styles.css";

const App = () => {
  return (
    <BackgroundProvider>
      <ExpensiveComponent />
    </BackgroundProvider>
  );
};

const BackgroundProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  return (
    <div className="app" style={{ backgroundColor }}>
      <input
        onChange={(e) => setBackgroundColor(e.target.value)}
        placeholder="enter color name or code"
      />
      {children}
    </div>
  );
};

export default App;
