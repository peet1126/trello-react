import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bus from "../surf-bus.png";
import { connect } from "react-redux";

class HowTo extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Bus} alt="Van" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="textColor card-title red-text">
                  {post.title}
                </span>
                <p className="textColor blue-text">{post.body}</p>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <h3 className="center">There are no posts</h3>
    );
    return (
      <div className="container howto">
        <h1 className="center blue-text">Third party list</h1>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(HowTo);
