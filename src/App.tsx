import { useEffect, useState } from "react";
import Box from "./components/Box";

function App() {
  const CHESSBOARD_DIMENTIONS = [8, 8];
  const [horsePos, setHorsePos] = useState<string>("");
  const [possibleMoves, setPossibleMoves] = useState<string[]>();

  const handleChangeHorsePos = (newPosition: string) => {
    setHorsePos(newPosition);
    findPossiblePositions(newPosition);
  };

  const findPossiblePositions = (hPos: string) => {
    // current horse pos
    let xCurr = parseInt(hPos[0]);
    let yCurr = parseInt(hPos[2]);

    // plays of horse
    let horizontalMoves = [1, 2, 2, 1, -1, -2, -2, -1];
    let verticalMoves = [2, 1, -1, -2, -2, -1, 1, 2];

    // resetting possibleMoves state
    setPossibleMoves([]);

    for (let playInd = 0; playInd < horizontalMoves.length; playInd++) {
      // new pos after play
      let x = xCurr + horizontalMoves[playInd];
      let y = yCurr + verticalMoves[playInd];

      if (
        x > 0 &&
        x < CHESSBOARD_DIMENTIONS[0] &&
        y > 0 &&
        y < CHESSBOARD_DIMENTIONS[1]
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
  for (let i = 0; i < CHESSBOARD_DIMENTIONS[0]; i++) {
    for (let j = 0; j < CHESSBOARD_DIMENTIONS[1]; j++) {
      i % 2 === 0
        ? j % 2 === 0
          ? Boxes.push(
              <Box
                pos={`${i} ${j}`}
                horsePos={horsePos}
                key={`${i} + ${j}`}
                changeHorsePos={handleChangeHorsePos}
                possible={
                  possibleMoves && possibleMoves?.indexOf(`${i} ${j}`) > -1
                }
              />
            )
          : Boxes.push(
              <Box
                pos={`${i} ${j}`}
                horsePos={horsePos}
                key={`${i} + ${j}`}
                black
                changeHorsePos={handleChangeHorsePos}
                possible={
                  possibleMoves && possibleMoves?.indexOf(`${i} ${j}`) > -1
                }
              />
            )
        : j % 2 === 0
        ? Boxes.push(
            <Box
              pos={`${i} ${j}`}
              horsePos={horsePos}
              key={`${i} + ${j}`}
              black
              changeHorsePos={handleChangeHorsePos}
              possible={
                possibleMoves && possibleMoves?.indexOf(`${i} ${j}`) > -1
              }
            />
          )
        : Boxes.push(
            <Box
              pos={`${i} ${j}`}
              horsePos={horsePos}
              key={`${i} + ${j}`}
              changeHorsePos={handleChangeHorsePos}
              possible={
                possibleMoves && possibleMoves?.indexOf(`${i} ${j}`) > -1
              }
            />
          );
    }
  }

  return (
    <main className="container mx-auto h-screen flex flex-col justify-center items-center">
      <div className={`inline-grid grid-cols-8 grid-rows-8 gap-0`}>{Boxes}</div>
    </main>
  );
}

export default App;
