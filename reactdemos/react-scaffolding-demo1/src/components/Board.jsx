import React, { PureComponent } from 'react'
import Square from './Square'
import CONSTS from './constants'

export default class Board extends PureComponent {

    state = {
        /* squares: [[15,14,15,19,6,18,15,14],
                  [18,7,8,10,3,5,11,19],
                  [20,11,10,1,6,3,16,3],
                  [7,14,4,9,18,14,13,3],
                  [20,5,15,3,9,8,16,16],
                  [6,7,4,12,2,19,11,20],
                  [20,11,10,3,4,9,5,15],
                  [13,10,4,18,16,2,4,20]] */
        squares: [[44582,59896,18095,60136,73923,26916,93559,66501,5119,89412,70434,74039,52801,82195,3052,92404,48842,73559,80732,8187,35659],[29370,46299,82125,21902,83867,5265,46207,1190,59353,23464,32970,56602,1975,13083,33052,57144,75694,96652,89057,15655,44369],[65989,32109,96255,48423,71212,40868,52955,23843,93551,11089,43083,24580,60514,55573,16947,61570,84067,76771,84772,50515,78450],[54939,30638,95718,16945,92695,12756,44838,53657,44559,30733,55793,70777,72087,71946,9644,40983,1807,80914,94645,76032,49584],[97766,8939,68881,94546,88547,61172,10556,27865,2355,76191,15524,78026,54869,12177,95078,27730,95026,59332,25145,11908,27799],[25747,27464,73397,63170,48909,42825,50971,27103,40829,2123,94269,91094,94626,59438,64783,99548,51804,2569,43203,67203,18329],[28519,48888,52471,62071,16415,15664,4671,32158,29325,73262,98697,14178,39866,70982,21230,12276,40667,23614,75457,58081,68450],[78800,68857,8419,98201,7502,45786,41623,16277,94230,76505,32129,2223,61317,19012,12917,91925,46600,81750,72747,81188,6716],[32396,38671,74890,74269,34408,82199,66950,88847,87527,96363,399,29866,91929,77108,13840,39941,33797,40521,91876,54832,9977],[88729,30930,662,13216,45719,79670,66382,23312,9830,22556,84463,43733,3964,17083,53927,47362,1788,43659,7262,8237,6414],[75349,87058,38122,39450,15441,15662,3728,28228,46740,62915,78100,19020,71888,83092,88909,26348,54498,5486,91123,65251,89588],[13313,35562,69603,30922,29304,66825,14921,16859,61620,98667,48131,23436,85270,21031,98830,99384,95179,70388,24870,29308,18238],[36141,2533,10085,43008,28290,91456,50195,27185,94088,34253,79919,43885,37813,71197,59486,94213,52197,32841,25273,27361,96412],[28103,37699,70001,32485,54610,2658,59677,42211,6476,8435,20317,45738,61270,12331,60394,34644,93339,6198,11604,79075,72893],[95586,61479,79837,19771,48390,44758,32127,94285,31300,43513,89857,96294,44276,65892,81783,92999,89604,15262,72664,63297,14052],[19808,45346,65230,30393,10235,37329,4043,83304,55816,30500,74385,10165,21047,84024,78451,89818,25203,78378,88620,68175,13167],[47845,15535,73768,53089,15779,88995,31918,589,77428,8045,67418,10946,88641,50191,51272,10769,62100,81621,29054,73522,37855],[22004,82866,9146,68207,14223,92395,88591,12261,70537,72161,49743,51812,47766,4828,14350,52910,62852,29169,73912,39850,99129]],
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

    renderSquare = (row, column) => <Square key={row*column + column} value={this.state.squares[row][column]}/>

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
        const {squares}  = this.state
        return (
            <div>
                <div className="status">{status}</div>

                {
                    squares.map((_, row) => {
                        //console.log('row', row)
                        return (
                            <div className="board-row" key={row}>
                                { 
                                    squares[0].map((_, column) => {
                                        //console.log('column', column)
                                        return this.renderSquare(row, column)
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
