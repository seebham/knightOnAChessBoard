const Box = ({
  pos,
  horsePos,
  black,
  changeHorsePos,
  possible,
}: {
  pos: string;
  horsePos: string;
  black?: boolean;
  changeHorsePos: (newPosition: string) => void;
  possible?: boolean;
}) => {
  const handleClick = () => {
    changeHorsePos(pos);
  };
  return (
    <div
      className={`relative w-12 h-12 ${black ? "bg-gray-500" : "bg-gray-50"} ${
        possible && "bg-green-400"
      } ${horsePos === pos && "bg-blue-400"} grid place-items-center`}
      onClick={handleClick}
    >
      {horsePos === pos && (
        <div className="font-semibold pointer-events-none">H</div>
      )}
    </div>
  );
};

export default Box;
