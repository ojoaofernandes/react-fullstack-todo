import React from 'react';

class Todo extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo);
  }

  render() {
    const { todo } = this.props;

    return (
      <div className="todo-item" onClick={this.handleClick}>
        <input type="checkbox" checked={todo.completed}  readOnly />
        {todo.description}
      </div>
    );
  }
};

export default Todo;
