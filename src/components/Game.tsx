import { useState } from "react";
import Board from "./Board.tsx"

function Game() {
    const [xIsNext, setxIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove]

    function handlePlay(nextSquares : any) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setxIsNext(!xIsNext)

    }

    function jumpTo(nextMove : any) {
        setCurrentMove(nextMove)
        setxIsNext(nextMove % 2 === 0)
    }

    const moves = history.map((_squares, move) => {
        let description

        if (move > 0) {
            description = "Move " + move
        }
        else {
            description = "Start"
        }

        return(

            <li key={move}>
                <button className="move_button" onClick={() => jumpTo(move)}>{description}</button>
            </li>

        )
    })

    return(
        <div className="game">
            <div className="game_board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game_info">
                <ol className="ord_list">
                    {moves}
                </ol>
            </div>
        </div>
    );

}

export default Game