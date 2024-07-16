import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>
        Click <Link to="/login">here</Link> to log in. If you don't have an
        account, click here to <Link to="/register">register</Link>.
      </p>
    </div>
  );
};

export default Home;
