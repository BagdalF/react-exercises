import { useEffect } from "react";
import ColorDisplay from "./components/ColorDisplay";
import ColorOption from "./components/ColorOption";

import { useColorOptions } from "./hooks/useColorOptions";
import { SelectColorProvider } from "./SelectColorContext";
import { IsWinProvider } from "./IsWinContext";

function App() {
  const [correctColor, colorOptions, refreshColors] = useColorOptions();

  useEffect(() => {
    refreshColors();
  }, []);

  return (
    <>
      <IsWinProvider>
        <SelectColorProvider>
          <ColorDisplay
            correctColor={correctColor}
            refreshColors={refreshColors}
          />

          {colorOptions.map((option, index) => (
            <ColorOption
              correctColor={correctColor}
              color={option}
              key={index}
            />
          ))}
        </SelectColorProvider>
      </IsWinProvider>
    </>
  );
}

export default App;
