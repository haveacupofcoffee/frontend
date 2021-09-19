import React, { Component } from 'react'

export default class Clock extends Component {

    state = {
        date: new Date()
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        console.log(this)
        this.setState({date: new Date()})
    }

    render() {
        const {date} = this.state
        return (
            <div>
                <h2>Hello world</h2>
                <h2>{date.toLocaleTimeString()}</h2>
                <button onClick={this.tick}>Test</button>
            </div>
        )
    }
}
