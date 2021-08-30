import React, { PureComponent } from 'react'

export default class Square extends PureComponent {

    handleClick = () => {
        
        this.props.onClick()
    }

    render() {
        //console.log(this.props)
        const {value} = this.props

        return (
           <button className="square" onClick={this.handleClick}>
               {value}
           </button>
        )
    }
}
