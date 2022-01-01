import { useState } from "react";
import Box from "./components/Box";

function App() {
  const CHESSBOARD_DIMENTIONS = [8, 8];
  const [horsePos, setHorsePos] = useState<string>("");

  const handleChangeHorsePos = (newPosition: string) => {
    setHorsePos(newPosition);
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
              />
            )
          : Boxes.push(
              <Box
                pos={`${i} ${j}`}
                horsePos={horsePos}
                key={`${i} + ${j}`}
                black
                changeHorsePos={handleChangeHorsePos}
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
            />
          )
        : Boxes.push(
            <Box
              pos={`${i}${j}`}
              horsePos={horsePos}
              key={`${i} + ${j}`}
              changeHorsePos={handleChangeHorsePos}
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
