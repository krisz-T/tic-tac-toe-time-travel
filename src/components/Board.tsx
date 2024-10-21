import Square from "./Square.tsx";

function Board({xIsNext, squares, onPlay} : any) {
    let winner = calculateWinner(squares)
    let status

    function handleClick(i : number) {
        if (squares[i] || calculateWinner(squares)) {
            return
        }

        const nextSquares = squares.slice()

        if (xIsNext) {
            nextSquares[i] = "X"
        }
        else {
            nextSquares[i] = "O"
        }

        onPlay(nextSquares)

    }

    function calculateWinner(squares : any) {
        const winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winLines.length; i++) {

            const [a, b, c] = winLines[i]

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }

        }

        return null

    }

    function isBoardFull(squares : any) {
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) {
                return false
            }
        }
        return true
    }

    if (winner) {
        status = "WINNER IS " + winner
    }
    else if (isBoardFull(squares)) {
        status = "Draw"
    }
    else {
        status = "Next player: " + (xIsNext ? "X" : "O")
    }

    return(
        <div className="board">
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <div className="status">
                {status}
            </div>
        </div>
    );
}

export default Board