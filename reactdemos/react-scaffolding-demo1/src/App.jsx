import React, {Component} from 'react';

class App extends Component {
    
    handleClick = () => window.location.href='https://www.google.com'
    
    
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Redirect to External</button>
            </div>
        );
    }
}

export default App;