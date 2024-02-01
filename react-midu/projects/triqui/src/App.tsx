import { useState } from "react";
import { Cell } from "./components/Cell";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState("");

  const updateTable = (index: number) => {
    if (winner === "") {
      const copyBoard = [...board];
      const turn = player ? "X" : "O";

      copyBoard[index] = turn;
      setBoard(copyBoard);

      isFinished(turn, copyBoard);
      player ? setPlayer(false) : setPlayer(true);
    }
  };

  const isDraw = () => {
    let confirm = true
    confirm = board.every(square => square != null)

    if(confirm && winner === ""){
      return "EMPATE"
    }else return ''
  }

  const isFinished = (turn: string, copyBoard: string[]): void => {
    if (
      copyBoard[0] === turn &&
      copyBoard[1] === turn &&
      copyBoard[2] === turn
    ) {
      setWinner(turn);
    } else if (
      copyBoard[3] === turn &&
      copyBoard[4] === turn &&
      copyBoard[5] === turn
    ) {
      setWinner(turn);
    } else if (
      copyBoard[6] === turn &&
      copyBoard[7] === turn &&
      copyBoard[8] === turn
    ) {
      setWinner(turn);
    } else if (
      copyBoard[0] === turn &&
      copyBoard[3] === turn &&
      copyBoard[6] === turn
    ) {
      setWinner(turn);
    } else if (
      copyBoard[1] === turn &&
      copyBoard[4] === turn &&
      copyBoard[7] === turn
    ) {
      setWinner(turn);
    } else if (
      copyBoard[2] === turn &&
      copyBoard[5] === turn &&
      copyBoard[8] === turn
    ) {
      setWinner(turn);
    } else if (
      copyBoard[0] === turn &&
      copyBoard[4] === turn &&
      copyBoard[8] === turn
    ) {
      setWinner(turn);
    } else if (
      copyBoard[2] === turn &&
      copyBoard[4] === turn &&
      copyBoard[6] === turn
    ) {
      setWinner(turn);
    }
  };

  const getPlayer = () => {
    return player ? "jugador 1" : "jugador 2";
  };

  const getTurn = () => {
    if(winner === "") return player ? "X" : "O";
    else return ""
  };


  return (
    <>
      <h1 className="text-white text-4xl font-bold text-center">Triqui</h1>
      <h2 className=" text-blue-500 text-xl font-bold text-center">
        Turno de: {getPlayer()}
      </h2>

      <section className="grid content-center mt-10 bg-transparent gap-3 grid-cols-[repeat(3,1fr)] max-w-[230px] ml-auto mr-auto">
        {board.map((_, index) => {
          return (
            <Cell key={index} index={index} updateTable={updateTable}>
              {getTurn()}
            </Cell>
          );
        })}
      </section>

      {
        winner != "" && (
          <h1 className="text-white text-4xl font-bold text-center mt-10">
            {`El ganador es el ${player ? "Jugador 2" : "Jugador 1"}`}
          </h1>
        )
      }

      <h1 className="text-white text-4xl font-bold text-center mt-10">
        {isDraw()}
      </h1>
    </>
  );
}

export default App;
