import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <input
            type="text"
            name="item"
            value={this.props.itemText}
            onChange={this.props.change}
          />
          <button>Add Todo</button>
        </form>
        <button onClick={() => this.props.clear()}>Clear Completed</button>
        <button>Hide/Show</button>
      </div>
    )
  }
}