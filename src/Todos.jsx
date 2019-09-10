import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <ul className="collection-item" key={todo.id}>
          <li className="collection-item">
            <div>
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
            </div>
          </li>
        </ul>
      );
    })
  ) : (
    <p className="center">You have no Todo's left!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
