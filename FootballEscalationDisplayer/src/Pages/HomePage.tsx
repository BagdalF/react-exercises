import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>This is The Home Page</h1>
      <Link to="/start">Start a Simulation</Link>
    </div>
  );
};

export default HomePage;
