import React, { PureComponent } from 'react'
import Square from './Square'
import CONSTS from './constants'

export default class Board extends PureComponent {

    state = {
        squares: Array(Math.pow(CONSTS.ROWS,2)).fill(null),
        isXNext: true
    }

    handleClick = i => {
        const {squares, isXNext} = this.state
        //console.log("i in Board handleClick:", i)
        let newSquares = [...squares]
        if(newSquares[i] === null) {
            
            newSquares[i] = isXNext? CONSTS.X : CONSTS.O
            this.setState({squares:newSquares, isXNext: !isXNext})
            console.log(this.hasAWinner(newSquares))
        }
    }

    componentDidMount() {
        this.initWinConditions()
    }

    renderSquare = i => <Square key={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>

    initWinConditions = () => {
        this.winConditionsArray = []
        if(CONSTS.ROWS < 3) {
            alert("Board Rows can't be less than 3")
            return
        }
        for(let i = 0;i < CONSTS.ROWS; i++) {
            this.winConditionsArray.push(
                Array(CONSTS.ROWS).fill(i*CONSTS.ROWS).map((value,row) => value + row)
            )
            this.winConditionsArray.push(
                Array(CONSTS.ROWS).fill(i).map((value, column) => value + column * CONSTS.ROWS)
            )
        }

        this.winConditionsArray.push(
            Array(CONSTS.ROWS).fill(0).map((_, column) => column * (CONSTS.ROWS + 1) )
        )

        this.winConditionsArray.push(
            Array(CONSTS.ROWS).fill(0).map((_,row) => (row+1) * (CONSTS.ROWS-1))
        ) 
        //console.log('this.winConditionsArray', this.winConditionsArray)
    }

    hasAWinner = newSquares => {
        let win = false
        this.winConditionsArray.forEach((subArr) => {
            console.log('subArr', subArr)
            console.log(subArr.every(value => {
                console.log('value',value, 'newSquares[value]', newSquares[value],'subArr[0]', subArr[0],newSquares[subArr[0]])
                return newSquares[value] !== null &&  newSquares[value] === newSquares[subArr[0]]
            }))
            /* if(subArr.every(value => newSquares[value] === newSquares[subArr[0]])) {
                win = true
                return
            } */
        })

        return win
            
    }

    render() {

        const status = 'Next player: ' + (this.state.isXNext? CONSTS.X : CONSTS.O)
        //console.log("squares", this.state.squares)
        return (
            <div>
                <div className="status">{status}</div>

                {
                    Array(CONSTS.ROWS).fill(null).map((_, row) => {
                        //console.log('row', row)
                        return (
                            <div className="board-row" key={row}>
                                { 
                                    Array(CONSTS.ROWS).fill(null).map((_, column) => {
                                        //console.log('column', column)
                                        return this.renderSquare((row * CONSTS.ROWS) + column)
                                    })
                                }
                            </div>
                        )
                    })
                }

                {/* <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div> */}

            </div>
        )
    }
}
