import "./Styles.css";
import useDarkMode from "use-dark-mode";
import Switch from "react-switch";

const App = () => {
  const { value, toggle, enable, disable } = useDarkMode();

  return (
    <div className="container">
      <form className="form-container">
        <h4>
          This is a form in <strong>{value ? "Dark" : "Light"}</strong> Mode
        </h4>
        <Switch
          height={20}
          width={40}
          className="switch"
          onColor="#8e44ad"
          offColor="#777"
          onChange={toggle}
          checked={value}
        />
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Enter email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="Enter password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
