import React, { Component } from 'react';
import './Todo.css';
/** Component displays a div with the task of the todo
 * For each Todo component, there will be a button with the text "X", when clicked, removed the todo.
 */

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTodo: false,
      todoItem: this.props.todoItem
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  // pass in removeTodo from the parent
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  // toggles the form when clicking ont he edit
  toggleForm() {
    this.setState({ editTodo: !this.state.editTodo });
  }
  // submits the edit form
  handleUpdate(evt) {
    evt.preventDefault();
    // take new todoItem data and pass up to the the parent
    this.props.updateTodos(this.props.id, this.state.todoItem);
    this.setState({ editTodo: false });
  }
  handleChange(evt) {
    // runs on every keystroke event
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  // Toggle todo completion (toggleTodo)
  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }
  render() {

    let displayItem;
    if (this.state.editTodo) {
      displayItem = (
        <div className='todo-item-container'>
          <form className='todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.todoItem}
              name="todoItem"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      displayItem = (
        <div className='todo-item-container'>
          <li
            className=
            {this.props.complete ? "todo-item complete" : "todo-item"
            }
            onClick={this.handleToggle}
          >
            {this.props.todoItem}
          </li>
          <div className='todo-item-icons'>
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className='todo-item'>
        {displayItem}
      </div>
    )
  }
}

export default Todo;


