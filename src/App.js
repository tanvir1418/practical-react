import { Routes, Route } from "react-router-dom";

import Footer from "./components/Common/Footer";
import Home from "./components/Home";
import Header from "./components/Common/Header";
import AboutUs from "./components/AboutUs";
import MessageAlert from "./components/Common/MessageAlert";

import "./Styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
      <MessageAlert />
    </div>
  );
};

export default App;
