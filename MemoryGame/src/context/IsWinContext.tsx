import { createContext, ReactNode, useContext, useState } from "react";

const IsWinContext = createContext<boolean | null>(null);
const SetIsWinContext = createContext<any>(null);

export const useIsWinContext = () => {
  return useContext(IsWinContext);
};

export const useSetIsWinContext = () => {
  return useContext(SetIsWinContext);
};

export const IsWinContextProvider = ({ children }: { children: ReactNode }) => {
  const [isWin, setIsWin] = useState<boolean>(false);

  const setWin = () => {
    setIsWin((prev) => !prev);
  };

  return (
    <IsWinContext.Provider value={isWin}>
      <SetIsWinContext.Provider value={setWin}>
        {children}
      </SetIsWinContext.Provider>
    </IsWinContext.Provider>
  );
};
