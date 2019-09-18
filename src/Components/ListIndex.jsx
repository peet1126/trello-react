import React, { Component } from "react";
import Todos from "../Todos";
import AddTodo from "../AddTodo";
import AddHeader from "../AddHeader";

class ListIndex extends Component {
  state = {
    todos: [
      {
        headerId: "Today's check list",
        id: 1,
        content: "Pick a wedding date."
      },
      { headerId: "Today's check list", id: 2, content: "Pick a venue." }
    ],
    headers: [{}]
  };

  deleteTodo = id => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };

  addHeader = header => {
    console.log(header, "header");
    const headers = [...this.state.headers, header];
    this.setState({
      headers: headers
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddHeader addHeader={this.addHeader} />
        <Todos
          headers={this.state.headers}
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default ListIndex;
