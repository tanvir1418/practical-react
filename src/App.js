import { useState } from "react";
import "./Styles.css";

const App = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "John",
    email: "john@gmail.com",
    images: ["profile.png", "cover.png"],
  });

  const changeUser = () => {
    setUser((prevState) => ({ ...prevState, name: input }));
  };

  return (
    <div className="app">
      <h1>User:</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter a new name..."
      />
      <button onClick={changeUser}>Change name</button>
      <h2>Username is {user.name}</h2>
    </div>
  );
};

export default App;
