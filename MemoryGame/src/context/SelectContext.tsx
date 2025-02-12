import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CardType } from "../types/CardType.types";

const SelectContext = createContext<
  [firstCard?: CardType, secondCard?: CardType]
>([]);
const SetSelectContext = createContext<any>(null);

export const useSelectContext = () => {
  return useContext(SelectContext);
};

export const useSetSelectContext = () => {
  return useContext(SetSelectContext);
};

export const SelectContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selection, setSelection] = useState<
    [firstCard?: CardType, secondCard?: CardType]
  >([]);

  useEffect(() => {
    if (selection.length === 2) {
      if (selection[0]?.name === selection[1]?.name) {
      } else {
        setTimeout(() => {
          const event = new CustomEvent("reset-cards", {
            detail: { ids: [selection[0]?.id, selection[1]?.id] },
          });
          window.dispatchEvent(event);
        }, 1000);
      }
      setSelection([]);
    }
  }, [selection]);

  const select = (card: CardType) => {
    if (!selection.length) {
      setSelection([card]);
    } else {
      setSelection(
        selection.concat([card]) as [firstCard: CardType, secondCard: CardType]
      );
    }
  };

  return (
    <SelectContext.Provider value={selection}>
      <SetSelectContext.Provider value={select}>
        {children}
      </SetSelectContext.Provider>
    </SelectContext.Provider>
  );
};
