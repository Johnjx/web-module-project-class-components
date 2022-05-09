import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }],
      itemText:'',
    }
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {...item, completed: !item.completed}
        }
        return item;
      })
    })
  }

  handleChange = (evt) => {
    this.setState({
      itemText: evt.target.value
    })
  };

  addTodo = item => {
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.addTodo(this.state.itemText)
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggle={this.toggleItem}/>
        <Form
          itemText={this.state.itemText}
          change={this.handleChange} 
          submit={this.handleSubmit}
          clear={this.clearCompleted}
           />
      </div>
    )
  }
}

//hold all state, all handlers