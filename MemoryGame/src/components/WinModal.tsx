import { BsArrowRepeat } from "react-icons/bs";
import { useIsWinContext, useSetIsWinContext } from "../context/IsWinContext";

const WinModal = () => {
  const isWin = useIsWinContext();
  const resetIsWin = useSetIsWinContext();

  const handleReset = () => {
    resetIsWin();
  };

  return isWin ? (
    <div className="modal">
      <h1>You Won!</h1>
      <BsArrowRepeat size={192} onClick={handleReset} />
    </div>
  ) : (
    <></>
  );
};

export default WinModal;
