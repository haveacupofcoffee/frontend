import React, {Component, Fragment} from 'react';

class Demo extends Component {
  render() {
    return (
      <Fragment key={1}>
        <input type="text"/>
        <input type="text"/>
      </Fragment>
    );
  }
}

export default Demo;