import React from "react";

const Todos = ({ todos, deleteTodo, headers }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li className="collection-item" key={todo.id}>
          {todo.content}
          <a href="#!" className="secondary-content">
            <i
              className="material-icons red-text"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              clear
            </i>
          </a>
        </li>
      );
    })
  ) : (
    <p className="center">You have no Todo's left!</p>
  );
  const todoHeader = headers.length > 1 ? (headers.map(head => {
    return (
        <li className="collection-header">
          <h4>{head.content}</h4>
        </li>
    )
    
  })
  ) : (null);
  console.log(todoHeader, "todoHeader");
  return (
    <div>
      <ul className="todos collection with-header">
        {todoHeader}
        {todoList}
      </ul>
    </div>
  );
};

export default Todos;
