import { createContext, useCallback, useState } from 'react';

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreaValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreaValuesVisible((prevState) => !prevState);
  }, []);

  return (
    <DashboardContext.Provider
      value={{ areValuesVisible, toggleValuesVisibility }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
3;
