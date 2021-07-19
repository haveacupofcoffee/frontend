import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.css'

class ListItem extends Component {

    state = {
        mouse: false
    }

    static propTypes = {
        updateToDos: PropTypes.func.isRequired
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateToDos(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        console.log("$$" + id);
        this.props.deleteToDos(id)
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse? '#ddd': 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse? 'block':'none'}} onClick={event => this.handleDelete(id)}>Delete</button>
            </li>
        );
    }
}

export default ListItem;