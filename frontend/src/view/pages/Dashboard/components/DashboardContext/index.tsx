import { createContext, useCallback, useState } from 'react';

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
  isNewAccountModalOpen: boolean;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreaValuesVisible] = useState(true);

  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreaValuesVisible((prevState) => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen((prevState) => !prevState);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen((prevState) => !prevState);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
        isNewAccountModalOpen,
        openNewAccountModal,
        closeNewAccountModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
3;
