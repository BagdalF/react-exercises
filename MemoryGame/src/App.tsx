import Grid from "./components/Grid";
import WinModal from "./components/WinModal";
import { CardsContextProvider } from "./context/CardsContext";
import { IsWinContextProvider } from "./context/IsWinContext";
import { SelectContextProvider } from "./context/SelectContext";

function App() {
  return (
    <>
      <IsWinContextProvider>
        <WinModal />

        <h1>Memory Game</h1>
        <CardsContextProvider>
          <SelectContextProvider>
            <Grid />
          </SelectContextProvider>
        </CardsContextProvider>
      </IsWinContextProvider>
    </>
  );
}

export default App;
