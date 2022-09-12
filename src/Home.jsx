import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="app">
      <Link to="/users/1">User1</Link>
    </div>
  );
};

export default Home;
