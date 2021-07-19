import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ListItem from "../ListItem";
import './index.css'

class List extends Component {

    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateToDos: PropTypes.func.isRequired,
        deleteToDos: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateToDos,deleteToDos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => <ListItem key={todo.id} {...todo} updateToDos={updateToDos} deleteToDos={deleteToDos}/>)
                }
            </ul>
        );
    }
}

export default List;