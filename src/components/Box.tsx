const Box = ({
  pos,
  horsePos,
  black,
  changeHorsePos,
}: {
  pos: string;
  horsePos: string;
  black?: boolean;
  changeHorsePos: (newPosition: string) => void;
}) => {
  const handleClick = () => {
    changeHorsePos(pos);
  };
  return (
    <div
      className={`relative w-12 h-12 ${
        black ? "bg-gray-500" : "bg-gray-50"
      } grid place-items-center`}
      onClick={handleClick}
    >
      {horsePos === pos && <div className="pointer-events-none">H</div>}
    </div>
  );
};

export default Box;
