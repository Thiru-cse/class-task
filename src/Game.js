import { useState } from "react";
import { GameBox } from './GameBox';

export function Game() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  // useState([0,1,2,3,4,5,6,7,8]);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; //return winner
      }
    }
    return null; //return nothing
  };
  const winner = decideWinner(board);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    if (!winner && !board[index]) {
      const boardcopy = [...board];
      boardcopy[index] = isXTurn ? "X" : "O";
      setBoard(boardcopy);
      setIsXTurn(!isXTurn);
    }
  };
  const restart = () => {
    setBoard([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
    setIsXTurn(true);
  };
  return (
    <div>
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h1>🎊Winner is : {winner}🎊</h1> : ""}
      <button>Restart</button>
    </div>
  );
}
