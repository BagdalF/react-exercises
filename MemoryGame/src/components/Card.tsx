import {
  GiAbdominalArmor,
  GiCrown,
  GiCrystalEye,
  GiDaggerRose,
  GiDove,
  GiGunRose,
} from "react-icons/gi";
import { CardType } from "../types/CardType.types";
import { useCardsContext, useSetCardsContext } from "../context/CardsContext";
import {
  useSelectContext,
  useSetSelectContext,
} from "../context/SelectContext";
import { useEffect } from "react";

const Card = ({ card }: { card: CardType }) => {
  const cards = useCardsContext();
  const setCards = useSetCardsContext();
  const selection = useSelectContext();
  const setSelection = useSetSelectContext();

  useEffect(() => {
    const handleReset = (event: Event) => {
      const { ids } = (event as CustomEvent).detail;
      if (ids.includes(card.id)) {
        setCards((prevCards: any) =>
          prevCards.map((c: any) =>
            c.id === card.id ? { ...c, discovered: false, selected: false } : c
          )
        );
      }
    };

    window.addEventListener("reset-cards", handleReset);
    return () => {
      window.removeEventListener("reset-cards", handleReset);
    };
  }, [card.id, setCards]);

  const renderCardLogo = () => {
    if (!card.discovered) return;
    switch (card.name) {
      case "crown":
        return <GiCrown size={"80%"} />;
      case "torso":
        return <GiAbdominalArmor size={"80%"} />;
      case "eye":
        return <GiCrystalEye size={"80%"} />;
      case "dagger":
        return <GiDaggerRose size={"80%"} />;
      case "bird":
        return <GiDove size={"80%"} />;
      case "gun":
        return <GiGunRose size={"80%"} />;
    }
  };

  const handleClick = () => {
    if (selection.length > 1 || card.discovered) return;

    const cardIndex = cards.findIndex((c) => c.id === card.id);
    if (cardIndex === -1) throw new Error("card not found");

    const updatedCards = cards.map((c, index) =>
      index === cardIndex ? { ...c, discovered: true, selected: true } : c
    );

    setCards(updatedCards);

    setSelection(card);
  };

  return (
    <div
      className={`card ${card.discovered ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="cardBack"></div>
      <div className="cardFront">{renderCardLogo()}</div>
    </div>
  );
};

export default Card;
