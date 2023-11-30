import { useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';

export function useAccountsController() {
  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState({
    isBeginnir: true,
    isEnd: false,
  });

  const sliderPiperView =
    windowWidth >= 1500 ? 3.1 : windowWidth >= 500 ? 2.1 : 1.2;

  return { sliderState, setSliderState, windowWidth, sliderPiperView };
}
