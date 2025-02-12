import { useIsWinContext } from "../IsWinContext";
import { useSelectColorContext } from "../SelectColorContext";

const ColorOption = ({
  correctColor,
  color,
}: {
  correctColor: string;
  color: string;
}) => {
  const selectColor = useSelectColorContext();
  const isWin = useIsWinContext();

  const handleClick = () => {
    selectColor && selectColor(color);
  };

  return (
    <button
      className={`colorOption ${
        isWin === null ? "" : color === correctColor ? "right" : "wrong"
      }`}
      onClick={handleClick}
      disabled={isWin !== null}
    >
      <h1>{color}</h1>
    </button>
  );
};

export default ColorOption;
