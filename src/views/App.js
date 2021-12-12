import React from "react"
import { Menu } from "../components/Menu"
import { Link } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <h1>App page</h1>
        <Menu />
        <Link to="/inzerat"><p>inzerat</p></Link>
      </div>
  );
}

export default App;
