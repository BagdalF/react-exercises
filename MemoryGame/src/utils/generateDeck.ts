const CARDS = [
  { id: 1, name: "crown", discovered: false, selected: false },
  { id: 2, name: "crown", discovered: false, selected: false },
  { id: 3, name: "torso", discovered: false, selected: false },
  { id: 4, name: "torso", discovered: false, selected: false },
  { id: 5, name: "eye", discovered: false, selected: false },
  { id: 6, name: "eye", discovered: false, selected: false },
  { id: 7, name: "dagger", discovered: false, selected: false },
  { id: 8, name: "dagger", discovered: false, selected: false },
  { id: 9, name: "bird", discovered: false, selected: false },
  { id: 10, name: "bird", discovered: false, selected: false },
  { id: 11, name: "gun", discovered: false, selected: false },
  { id: 12, name: "gun", discovered: false, selected: false },
];

export default function generateDeck() {
  const generateDeck = () => {
    return CARDS.sort(() => Math.random() - 0.5);
  };

  return generateDeck;
}
