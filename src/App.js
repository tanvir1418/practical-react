import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import "./Styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
