import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSetIsWinContext } from "./IsWinContext";
import { useColorOptions } from "./hooks/useColorOptions";

const ColorSelectedContext = createContext<string | null>(null);
const SelectColorContext = createContext<any>(null);

export const useColorSelectedContext = () => {
  return useContext(ColorSelectedContext);
};

export const useSelectColorContext = () => {
  return useContext(SelectColorContext);
};

export const SelectColorProvider = ({ children }: { children: ReactNode }) => {
  const [colorSelected, setColorSelected] = useState<string | null>(null);
  const [correctColor, _colorOptions, _refreshColors] = useColorOptions();
  const validateWin = useSetIsWinContext();

  useEffect(() => {
    colorSelected !== null &&
      validateWin &&
      validateWin(colorSelected === correctColor);
  }, [colorSelected]);

  const changeColorSelected = (color: string) => {
    setColorSelected && setColorSelected(color);
  };

  return (
    <ColorSelectedContext.Provider value={colorSelected}>
      <SelectColorContext.Provider value={changeColorSelected}>
        {children}
      </SelectColorContext.Provider>
    </ColorSelectedContext.Provider>
  );
};
