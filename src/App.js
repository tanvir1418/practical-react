import { useEffect, useMemo, useState } from "react";
import "./Styles.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");

  const userType = useMemo(
    () => ({
      underAge: age < 18 ? true : false,
      citizen: country === "USA" ? true : false,
    }),
    [age, country]
  );

  useEffect(() => {
    console.log("User type changed!");
  }, [userType]);

  // Without useMemo Solution
  // const userType = {
  //   underAge: age < 18 ? true : false,
  //   citizen: country === "USA" ? true : false,
  // };

  // useEffect(() => {
  //   console.log("User type changed!");
  // }, [userType.age, userType.citizen]);

  console.log("Component Rerendered!");

  return (
    <div className="app">
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        placeholder="enter age"
      />
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Pakistan">Pakistan</option>
      </select>

      <h1>User Details</h1>
      <p>{`${name} (${age}) is from ${country}`}</p>
      <p>{JSON.stringify(userType)}</p>
    </div>
  );
};

export default App;
