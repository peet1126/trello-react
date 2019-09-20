import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ListIndex from "./Components/ListIndex";
import HowTo from "./Components/HowTo";
import Home from "./Components/Home";
import Post from "./Components/Post";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={ListIndex} />
            <Route path="/howto" component={HowTo} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
