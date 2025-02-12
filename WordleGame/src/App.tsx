import { useEffect, useState } from "react";
import { randomWord } from "./data/words";
// const API_REQ = "https://random-word-api.herokuapp.com/word?length=5";

function App() {
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");

  const validateGuess = () => {
    setCurrentGuess((currentGuess) => currentGuess + 1);
    let normalizedAnswer = answer
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    if (guesses[currentGuess].includes(normalizedAnswer)) {
      console.log("Congrats");
    }
  };

  useEffect(() => {
    const handleTyping = (event: KeyboardEvent) => {
      if (guesses[currentGuess].length > 0 && event.key === "Backspace") {
        setGuesses(
          guesses.map((guess, index) => {
            if (index === currentGuess) {
              return guess.substring(0, guess.length - 1);
            }
            return guess;
          })
        );
      }

      if (guesses[currentGuess].length === 5) {
        if (event.key === "Enter") {
          validateGuess();
        } else {
          return;
        }
      }

      if (event.key.match(/[^a-zA-Z]/) || event.key.length > 1) return;

      setGuesses((guesses) =>
        guesses.map((guess, index) => {
          if (index === currentGuess) {
            return guess + event.key.toUpperCase();
          }
          return guess;
        })
      );
    };

    window.addEventListener("keydown", handleTyping);

    return () => window.removeEventListener("keydown", handleTyping);
  }, [guesses, currentGuess]);

  useEffect(() => {
    const fetchAnswer = async () => {
      setAnswer(randomWord().toUpperCase());
    };
    fetchAnswer();
  }, []);

  return (
    <>
      <main>
        <h1>wrldle.</h1>
        {guesses.map((guess: string, index) => {
          return (
            <Line
              key={index}
              guess={guess}
              answer={answer}
              isBeforeCurrentGuess={index < currentGuess}
            />
          );
        })}
      </main>
    </>
  );
}

export function Line({ guess, answer, isBeforeCurrentGuess }: any) {
  const tileColor = (index: number) => {
    if (!isBeforeCurrentGuess) return "";

    switch (true) {
      case answer[index].normalize("NFD").replace(/[\u0300-\u036f]/g, "") ===
        guess.charAt(index):
        return "green";
      case answer
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(guess.charAt(index)):
        return "yellow";
      default:
        return "black";
    }
  };
  return (
    <section className="line">
      {Array(5)
        .fill("")
        .map((_, index) => {
          return (
            <div key={guess + index} className={`tile ${tileColor(index)}`}>
              {guess.charAt(index)}
            </div>
          );
        })}
    </section>
  );
}

export default App;
