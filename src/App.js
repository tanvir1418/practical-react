import { useState } from "react";
import "./Styles.css";

const App = () => {
  const [displayUser, setDisplayUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setDisplayUser(true);
    console.log(user);
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        {/* <form> */}
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          onChange={handleChange}
          name="surname"
          placeholder="surname"
        />
        <input
          type="text"
          onChange={handleChange}
          name="username"
          placeholder="username"
        />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="password"
        />
        <input
          type="text"
          onChange={handleChange}
          name="country"
          placeholder="country"
        />
        <input
          type="text"
          onChange={handleChange}
          name="city"
          placeholder="city"
        />
        <input
          type="text"
          onChange={handleChange}
          name="address"
          placeholder="address"
        />
        <button>Submit</button>
      </form>
      <p>{displayUser && JSON.stringify(user)}</p>
    </div>
  );
};

export default App;
