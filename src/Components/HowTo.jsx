import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

class HowTo extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
                <p>{post.body}</p>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <h3 className="center">There are no posts</h3>
    );
    return (
      <div className="container">
        <h1 className="center blue-text">Third party list</h1>
        {postList}
      </div>
    );
  }
}

export default HowTo;
