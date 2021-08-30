import React, {Component} from 'react';

const TestContext = React.createContext()

class A extends Component {
  render() {
    return (
      <div>
        <TestContext.Provider value={{a:1, b:2}}>
          <B/>
        </TestContext.Provider>
      </div>
    );
  }
}

export default A;

class B extends Component {
  render() {
    return (
      <div>
        <C/>
      </div>
    );
  }
}

class C extends Component {

  render() {
    return (
      <div>
        <TestContext.Consumer>
          {
            value => {
              return (
                <div>
                  <h2>{value.a}</h2>
                  <h2>{value.b}</h2>
                </div>

              )
            }
          }
        </TestContext.Consumer>
      </div>
    );
  }
}