const Box = ({
  pos,
  knightPos,
  black,
  changeKnightPos,
  possible,
}: {
  pos: string;
  knightPos: string;
  black?: boolean;
  changeKnightPos: (newPosition: string) => void;
  possible?: boolean;
}) => {
  const handleClick = () => {
    changeKnightPos(pos);
  };
  return (
    <div
      className={`relative w-12 h-12 ${black ? "bg-gray-500" : "bg-gray-50"}
      ${knightPos === pos && "bg-blue-600"} ${
        possible && "border-4 border-green-600 bg-green-400"
      }  grid place-items-center`}
      onClick={handleClick}
    >
      {knightPos === pos && (
        <div className="text-gray-50 font-bold pointer-events-none border-2 rounded-full px-2 py-1">
          K
        </div>
      )}
    </div>
  );
};

export default Box;
