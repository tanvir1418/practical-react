import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import "./Styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
