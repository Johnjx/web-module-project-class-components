import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div 
      onClick={() => this.props.toggle(this.props.item.id)}
      className={this.props.item.completed? 'completed': ''}
      >
        <p>{this.props.item.name}</p>
      </div>
    )
  }
}