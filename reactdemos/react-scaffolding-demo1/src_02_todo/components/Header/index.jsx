import React, {Component} from 'react';
import {nanoid} from "nanoid";
import PropTypes from 'prop-types'

import './index.css'

class Index extends Component {

    static propTypes = {
        addToDo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const {keyCode, target} = event
        if(keyCode !== 13) return

        const todoName = target.value.trim()
        if(todoName === '') {
            alert("Can't input empty value!")
            return
        }

        const todoObj = {id: nanoid(), name: todoName, done: false}
        this.props.addToDo(todoObj)

        target.value = ''

    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="Please input the name of your task, then press Enter!"/>
            </div>
        );
    }
}

export default Index;