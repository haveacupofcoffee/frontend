import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students')
      .then(
        response => {
          console.log("Successfully fetched students data", response.data)
        },
        error => {
          console.log("Failed to fetch Student data", error)
        }
      )
  }

  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars')
      .then(
        response => {
          console.log("Successfully fetched car data", response.data)
        },
        error => {
          console.log("Failed to fetch car data", error)
        }
      )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>Click to fetch Students Data</button>
        <button onClick={this.getCarData}>Click to fetch Car Data</button>
      </div>
    );
  }
}

export default App;