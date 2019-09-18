import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={ListIndex} />
          <Route exact path="/howto" component={HowTo} />
          <Route path="/:post_id" component={Post} />
        </div>
      </Router>
    );
  }
}
export default App;
