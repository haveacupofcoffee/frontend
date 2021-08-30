import React, {Component} from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'

import {add} from '../../redux/actions/person';



class Person extends Component {

  add = () => {
    const name = this.nameInputElement.value
    const age = this.ageInputElement.value * 1
    const newPerson = {
      id: nanoid(),
      name,
      age
    }
    this.props.add(newPerson)
  }


  render() {
    return (
      <div>
        <h2>Sum from the Count component:{this.props.count}</h2>
        <input type="text" placeholder='name' ref={input => this.nameInputElement = input}/>&nbsp;
        <input type="text" placeholder='age' ref={input => this.ageInputElement = input}/>&nbsp;
        <button onClick={this.add}>Add</button>
        <h2>Persons</h2>
        <ul>
          {
            this.props.persons.map(person => <li key={person.id}>{person.name} --- {person.age}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({count:state.count, persons:state.persons}),
  {
    add
  }
)(Person);