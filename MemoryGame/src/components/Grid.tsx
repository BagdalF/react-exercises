import { useCardsContext } from "../context/CardsContext";
import Card from "./Card";

const Grid = () => {
  const cards = useCardsContext();

  return (
    <div className="grid">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Grid;
