import { useEffect, useState } from "react";
// OPTION: 02
// import { useMemo } from "react";
import "./Styles.css";

const App = () => {
  // Primitive Values
  const [name, setName] = useState(false);
  // Reference Values
  const [state, setState] = useState({
    name: "",
    selected: false,
  });

  useEffect(() => {
    console.log("The state has changed, useEffect runs!");
  }, [state.name, state.selected]);

  // OPTION: 02
  // const user = useMemo(
  //   () => ({
  //     name: state.name,
  //     selected: state.selected,
  //   }),
  //   [state.name, state.selected]
  // );

  // useEffect(() => {
  //   console.log("The state has changed, useEffect runs!");
  // }, [user]);

  const handleAdd = () => {
    setState((prevState) => ({ ...prevState, name }));
  };

  const handleSelect = () => {
    setState((prevState) => ({ ...prevState, selected: true }));
  };

  return (
    <div className="app">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        name="name"
        placeholder="name"
      />

      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default App;
