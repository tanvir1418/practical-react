import { useEffect, useState } from "react";
import "./Styles.css";

const App = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Effect Enter");

    const interval = setInterval(() => {
      setNumber((prevState) => prevState + 1);
    }, [1000]);

    //return a clean up function
    return () => {
      console.log("wait! before running the effect, I should clean here!");
      //clear something from the previous effect
      clearInterval(interval);
      console.log("okay dore! you can run!");
    };
  }, []);

  return (
    <div className="app">
      <h1>{number}</h1>
    </div>
  );
};

export default App;
