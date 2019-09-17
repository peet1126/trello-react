import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import HowTo from "./Components/HowTo";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import AddHeader from "./AddHeader";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <h1 className="center blue-text">Login to get started</h1>
          <Route exact path="/home" component={Home} />
          <Route exact path="/howto" component={HowTo} />
        </div>
      </Router>
    );
  }
}
export default App;
