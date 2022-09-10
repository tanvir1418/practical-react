import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="app">
      <Link to="/posts">Go to posts</Link>
    </div>
  );
};

export default Home;