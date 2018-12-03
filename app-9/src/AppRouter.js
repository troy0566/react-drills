import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home.js"
import Signup from "./Signup.js"
import Details from "./Details.js"

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Signup/">About</Link>
          </li>
          <li>
            <Link to="/details/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/Signup/" component={Signup} />
      <Route path="/Details/" component={Details} />
    </div>
  </Router>
);

export default AppRouter