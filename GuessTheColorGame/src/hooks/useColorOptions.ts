import { useState } from "react";

export const useColorOptions = () => {
  const [colorOptions, setColorOptions] = useState<string[] | []>([]);
  const [correctColor, setCorrectColor] = useState<string>("");

  const HEXADECIMAL_NUMBERS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const OPTIONS_QUANTITY = 3;
  const HEX_NUMBER_SIZE = 6;

  const refreshColors = () => {
    const updatedColorOptions = [...colorOptions];

    for (let i = 0; i < OPTIONS_QUANTITY; i++) {
      updatedColorOptions[i] = createColor();
    }

    setColorOptions(updatedColorOptions);
    setCorrectColor(
      updatedColorOptions[
        Math.floor(Math.random() * updatedColorOptions.length)
      ]
    );
  };

  const createColor = () => {
    let hexNumber = "";
    for (let j = 0; j < HEX_NUMBER_SIZE; j++) {
      hexNumber = hexNumber.concat(
        "",
        HEXADECIMAL_NUMBERS[
          Math.floor(Math.random() * HEXADECIMAL_NUMBERS.length)
        ]
      );
    }

    return `#${hexNumber}`;
  };

  return [correctColor, colorOptions, refreshColors] as const;
};
