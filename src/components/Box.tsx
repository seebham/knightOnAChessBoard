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
        possible && "border-4 border-green-600 bg-green-400"
      } ${horsePos === pos && "bg-blue-600"} grid place-items-center`}
      onClick={handleClick}
    >
      {horsePos === pos && (
        <div className="text-gray-50 font-bold pointer-events-none border-2 rounded-full px-2 py-1">
          H
        </div>
      )}
    </div>
  );
};

export default Box;
