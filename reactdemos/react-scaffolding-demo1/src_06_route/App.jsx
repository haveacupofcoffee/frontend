import React, {Component} from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <NavBar/>
          <Content/>
        </div>

      </div>
    );
  }
}

export default App;