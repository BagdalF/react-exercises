import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CardType } from "../types/CardType.types";
import generateDeck from "../utils/generateDeck";
import { useIsWinContext, useSetIsWinContext } from "./IsWinContext";

const CardsContext = createContext<CardType[] | []>([]);
const SetCardsContext = createContext<any>(null);

export const useCardsContext = () => {
  return useContext(CardsContext);
};

export const useSetCardsContext = () => {
  return useContext(SetCardsContext);
};

export const CardsContextProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<CardType[] | []>(generateDeck());
  const setIsWin = useSetIsWinContext();
  const isWin = useIsWinContext();

  useEffect(() => {
    if (cards.every((c) => c.discovered)) {
      setIsWin();
    }
  }, [cards]);

  useEffect(() => {
    if (isWin === false && cards.every((c) => c.discovered))
      setCards(generateDeck()());
  }, [isWin]);

  const changeCards = (updatedCards: CardType[] | []) => {
    setCards(updatedCards);
  };

  return (
    <CardsContext.Provider value={cards}>
      <SetCardsContext.Provider value={changeCards}>
        {children}
      </SetCardsContext.Provider>
    </CardsContext.Provider>
  );
};
