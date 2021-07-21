import React, {Component} from 'react';
import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";

import './App.css'


class App extends Component {

    state = {
        todos: [
            {id: '001', name: 'Sleep', done: true},
            {id: '002', name: 'Work Out', done: true},
            {id: '003', name: 'Code', done: false},
            {id: '004', name: 'Read', done: false},
        ]
    }

    addToDo = (todoObj) => {
        let {todos} = this.state
        todos = [todoObj, ...todos]
        this.setState({todos})
    }

    updateToDos = (id, done) => {
        let {todos} = this.state
        todos = todos.map(todoObj => {
            if(todoObj.id === id) {
                return {...todoObj, done}
            }else {
                return todoObj
            }
        })

        this.setState({todos})
    }

    deleteToDos = (id) => {
        let {todos} = this.state
        todos = todos.filter( todo => todo.id !== id)
        this.setState({todos})
    }

    checkAll = (done) => {
        let {todos} = this.state
        todos = todos.map(todo => { return {...todo, done}})
        this.setState({todos})
    }

    clearCompleted = () => {
        let {todos} = this.state
        todos = todos.filter(todo => !todo.done)
        this.setState({todos})
    }



    render() {

        const {todos} = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addToDo={this.addToDo}/>
                    <List todos={todos} updateToDos={this.updateToDos} deleteToDos={this.deleteToDos}/>
                    <Footer todos={todos} checkAll={this.checkAll} clearCompleted = {this.clearCompleted}/>
                </div>
            </div>
        );
    }
}

export default App;