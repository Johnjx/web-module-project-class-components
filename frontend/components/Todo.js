import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div onClick={() => this.props.toggle(this.props.item.id)}>
        <p>{this.props.item.name}</p>
      </div>
    )
  }
}

//display task, p