import { useIsWinContext, useSetIsWinContext } from "../IsWinContext";
import {
  useColorSelectedContext,
  useSelectColorContext,
} from "../SelectColorContext";
import { BsArrowRepeat } from "react-icons/bs";

const ColorDisplay = ({
  correctColor,
  refreshColors,
}: {
  correctColor: string;
  refreshColors: () => void;
}) => {
  const colorSelected = useColorSelectedContext();
  const isWin = useIsWinContext();

  const setIsWin = useSetIsWinContext();
  const setSelectedColor = useSelectColorContext();

  const handleReset = () => {
    setIsWin(null);
    setSelectedColor(null);
    refreshColors();
  };

  return (
    <div
      className={`colorDisplay ${
        colorSelected === null
          ? ""
          : colorSelected === correctColor
          ? "right"
          : "wrong"
      }`}
      style={{ backgroundColor: correctColor }}
    >
      {isWin != null && (
        <button className="replay" onClick={handleReset}>
          <BsArrowRepeat size={96} />
        </button>
      )}
    </div>
  );
};

export default ColorDisplay;
