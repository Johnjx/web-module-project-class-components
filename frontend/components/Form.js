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
        <button>Hide</button>
      </div>
    )
  }
}

//form, input, submit(add todo) (also on keydown Enter)
//clear completed button (hide and show)