import { createContext, ReactNode, useContext, useState } from "react";

const SetIsWinContext = createContext<any>(null);
const IsWinContext = createContext<boolean | null>(null);

export const useIsWinContext = () => {
  return useContext(IsWinContext);
};

export const useSetIsWinContext = () => {
  return useContext(SetIsWinContext);
};

export const IsWinProvider = ({ children }: { children: ReactNode }) => {
  const [isWin, setIsWin] = useState<boolean | null>(null);

  const validateWin = (isWin: boolean) => {
    console.log(isWin);

    setIsWin && setIsWin(isWin);
  };

  return (
    <IsWinContext.Provider value={isWin}>
      <SetIsWinContext.Provider value={validateWin}>
        {children}
      </SetIsWinContext.Provider>
    </IsWinContext.Provider>
  );
};
