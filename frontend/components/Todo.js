import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>{this.props.item.name}</p>
      </div>
    )
  }
}

//display task, p