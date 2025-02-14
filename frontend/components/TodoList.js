import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        {this.props.todos.map(item => (
          <Todo
           item={item}
           key={item.id}
           toggle={this.props.toggle}
          />
        ))}
      </div>
    )
  }
}
