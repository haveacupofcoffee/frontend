import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.css'

class Footer extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired
  }

  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked)
  }

  handleClearCompleted = () => {
    this.props.clearCompleted()
  }

  render() {

    const {todos} = this.props
    const completed = todos.reduce((prev, todo) => prev + (todo.done ? 1 : 0), 0)
    const total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={completed === total && total !== 0} onChange={this.handleCheckAll}/>
        </label>
        <span>Completed: {completed} / Total: {total}</span>
        <button onClick={this.handleClearCompleted} className="btn btn-danger" >Clear Completed Task(s)</button>
      </div>
    );
  }
}

export default Footer;