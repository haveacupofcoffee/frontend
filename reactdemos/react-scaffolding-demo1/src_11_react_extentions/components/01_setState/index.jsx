import React, {Component} from 'react';

class Demo extends Component {

  state = {
    count : 0
  }

  add = () => {
    //setState object style
    /*const {count} = this.state
    this.setState({count: count+1})*/

    /*this.setState({count: this.state.count + 1},
      () => console.log("CallBack function in setState, Count:", this.state.count)
    )*/

    //function style
    this.setState(state => ({count: state.count + 1}),
      () => console.log("CallBack function in setState, Count:" + this.state.count)
    )


  }



  render() {
    return (
      <div>
        <h2>Current Sum: {this.state.count}</h2>
        <button onClick={this.add}>+ 1</button>
      </div>
    );
  }
}

export default Demo;