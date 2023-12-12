import { useMemo, useState } from 'react';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountsController() {
  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginnir: true,
    isEnd: false,
  });

  const { accounts, isFetching } = useBankAccounts();

  const currentBalance = useMemo(() => {
    return accounts.reduce(
      (total, account) => total + account.currentBalance,
      0,
    );
  }, [accounts]);

  const sliderPiperView =
    windowWidth >= 1500 ? 3.1 : windowWidth >= 500 ? 2.1 : 1.2;

  return {
    sliderState,
    setSliderState,
    sliderPiperView,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: isFetching,
    accounts: accounts ?? [],
    openNewAccountModal,
    currentBalance,
  };
}
