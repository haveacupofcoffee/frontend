import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import About from "../../pages/About"
import Home from '../../pages/Home'

class Content extends Component {
  render() {
    return (
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/home" component={Home}/>
              <Redirect to="/about"/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;