import React, {Component} from 'react';
import './index.css'

class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"/>
                </label>
                <span>
                      <span>Completed: 0</span> / Total: 2</span>
                <button className="btn btn-danger">Clear Completed Task(s)</button>
            </div>
        );
    }
}

export default Footer;