import { useState } from 'react';
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

  const sliderPiperView =
    windowWidth >= 1500 ? 3.1 : windowWidth >= 500 ? 2.1 : 1.2;

  return {
    sliderState,
    setSliderState,
    sliderPiperView,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: false,
    accounts: [],
    openNewAccountModal,
  };
}
