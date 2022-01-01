import { useEffect, useState } from "react";
import Box from "./components/Box";

function App() {
  const CHESSBOARD_DIMENSIONS = [8, 8];
  const [knightPos, setKnightPos] = useState<string>("");
  const [possibleMoves, setPossibleMoves] = useState<string[]>();

  const handleChangeKnightPos = (newPosition: string) => {
    setKnightPos(newPosition);
    findPossiblePositions(newPosition);
  };

  const findPossiblePositions = (hPos: string) => {
    // current knight pos
    let xCurr = parseInt(hPos[0]);
    let yCurr = parseInt(hPos[2]);

    // plays of knight
    let horizontalMoves = [1, 2, 2, 1, -1, -2, -2, -1];
    let verticalMoves = [2, 1, -1, -2, -2, -1, 1, 2];

    // resetting possibleMoves state
    setPossibleMoves([]);

    for (let playInd = 0; playInd < horizontalMoves.length; playInd++) {
      // new pos after play
      let x = xCurr + horizontalMoves[playInd];
      let y = yCurr + verticalMoves[playInd];

      if (
        x >= 0 &&
        x < CHESSBOARD_DIMENSIONS[0] &&
        y >= 0 &&
        y < CHESSBOARD_DIMENSIONS[1]
      ) {
        setPossibleMoves((prevMoves) => {
          let newMove = `${x} ${y}`;
          if (!prevMoves) return new Array(newMove);
          else {
            return [...prevMoves, newMove];
          }
        });
      }
    }
  };

  const Boxes = [];
  for (let i = 0; i < CHESSBOARD_DIMENSIONS[0]; i++) {
    for (let j = 0; j < CHESSBOARD_DIMENSIONS[1]; j++) {
      i % 2 === 0
        ? j % 2 === 0
          ? Boxes.push(
              <Box
                pos={`${i} ${j}`}
                knightPos={knightPos}
                key={`${i} + ${j}`}
                changeKnightPos={handleChangeKnightPos}
                possible={
                  possibleMoves && possibleMoves?.indexOf(`${i} ${j}`) > -1
                }
              />
            )
          : Boxes.push(
              <Box
                pos={`${i} ${j}`}
                knightPos={knightPos}
                key={`${i} + ${j}`}
                black
                changeKnightPos={handleChangeKnightPos}
                possible={
                  possibleMoves && possibleMoves?.indexOf(`${i} ${j}`) > -1
                }
              />
            )
        : j % 2 === 0
        ? Boxes.push(
            <Box
              pos={`${i} ${j}`}
              knightPos={knightPos}
              key={`${i} + ${j}`}
              black
              changeKnightPos={handleChangeKnightPos}
              possible={
                possibleMoves && possibleMoves?.indexOf(`${i} ${j}`) > -1
              }
            />
          )
        : Boxes.push(
            <Box
              pos={`${i} ${j}`}
              knightPos={knightPos}
              key={`${i} + ${j}`}
              changeKnightPos={handleChangeKnightPos}
              possible={
                possibleMoves && possibleMoves?.indexOf(`${i} ${j}`) > -1
              }
            />
          );
    }
  }

  return (
    <main className="container mx-auto h-screen flex flex-col justify-center items-center">
      <div
        className={`inline-grid grid-cols-8 grid-rows-8 gap-0 border-2 border-gray-500 shadow-lg`}
      >
        {Boxes}
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-row justify-start items-center gap-2">
          <div className="w-12 h-12 bg-blue-600 grid place-content-center">
            <span className="text-gray-50 font-bold pointer-events-none border-2 rounded-full px-2 py-1">
              H
            </span>
          </div>
          - Position of the Knight
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="h-12 w-12 border-4 border-green-600 bg-green-400" />-{" "}
          <div>Possible moves for the Knight</div>
        </div>
      </div>
    </main>
  );
}

export default App;
