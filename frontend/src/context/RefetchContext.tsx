import { createContext, useContext, useState, type ReactNode } from "react";

interface IRefetch {
  reFlag: boolean;
  triggerRefetch: () => void;
}

const RefetchContext = createContext<IRefetch>({
  reFlag: true,
  triggerRefetch: (): void => {},
});

export const RefetchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [reFlag, setReFlag] = useState<boolean>(true);
  const triggerRefetch = () => {
    setReFlag((prev: boolean) => !prev);
  };
  return (
    <RefetchContext.Provider value={{ reFlag, triggerRefetch }}>
      {children}
    </RefetchContext.Provider>
  );
};

export const useRefetchContext = () => {
  const context: IRefetch = useContext(RefetchContext);
  if (!context) {
    throw Error("useRefetchContext is not valid");
  }
  return context;
};
