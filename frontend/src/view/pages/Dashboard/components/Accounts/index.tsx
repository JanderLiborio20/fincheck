import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from '../../../../../assets/components/EyeIcon';

import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { AccountCard } from './Card';
import { AccountsSliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountController';

export function Accounts() {
  const {
    setSliderState,
    sliderState,
    sliderPiperView,
    areValuesVisible,
    toggleValuesVisibility,
  } = useAccountsController();

  return (
    <div
      className="bg-teal-900 rounded-2xl w-full h-full
  md:p-10 px-4 py-8 flex flex-col"
    >
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo Total</span>

        <div className="flex items-center gap-2">
          <strong
            className={cn(
              `tracking-[-1px] text-white text-2xl`,
              !areValuesVisible && 'blur-md',
            )}
          >
            {formatCurrency(10000)}
          </strong>
          <button
            className="w-8 h-8 flex items-center justify-center"
            onClick={toggleValuesVisibility}
          >
            <EyeIcon open={!areValuesVisible} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-end flex-col mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={sliderPiperView}
            onSlideChange={(swiper) => {
              setSliderState({
                isBeginnir: swiper.isBeginning,
                isEnd: swiper.isEnd,
              });
            }}
          >
            <div
              className="flex items-center justify-between mb-4"
              slot="container-start"
            >
              <strong className="text-white tracking-[-1px] text-lg">
                Minhas contas
              </strong>
              <AccountsSliderNavigation
                isBeginning={sliderState.isBeginnir}
                isEnd={sliderState.isEnd}
              />
            </div>

            <SwiperSlide>
              <AccountCard
                color="#7905f2"
                name="Nubank"
                balance={1000}
                type="CASH"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                color="#333"
                name="Xp"
                balance={10200}
                type="INVESTMENT"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                color="#0f0"
                name="Carteira"
                balance={1000}
                type="CHECKING"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
