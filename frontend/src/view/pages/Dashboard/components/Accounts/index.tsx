import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from '../../../../../assets/components/EyeIcon';

import { PlusIcon } from '@radix-ui/react-icons';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { Spinner } from '../../../../components/Spinner';
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
    isLoading,
    accounts,
    openNewAccountModal,
    currentBalance,
  } = useAccountsController();

  return (
    <div
      className="bg-teal-900 rounded-2xl w-full h-full
  md:p-10 px-4 py-8 flex flex-col"
    >
      {isLoading && (
        <div className="h-full w-full flex items-center justify-center">
          <Spinner className="text-teal-950/50 fill-white h-10 w-10" />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className="tracking-[-0.5px] text-white block">
              Saldo Total
            </span>

            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  `tracking-[-1px] text-white text-2xl`,
                  !areValuesVisible && 'blur-md',
                )}
              >
                {formatCurrency(currentBalance)}
              </strong>
              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-end flex-col mt-10 md:mt-0">
            {accounts.length === 0 && (
              <>
                <div className="mb-4">
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas contas
                  </strong>
                </div>

                <button
                  className="mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center gap-4 text-white"
                  onClick={openNewAccountModal}
                >
                  <div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex  items-center justify-center">
                    <PlusIcon className="w-6 h-6" />
                  </div>
                  <span className="tracking-[-0.5px] font-medium block w-32 text-center">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
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

                  {accounts.map((account) => (
                    <SwiperSlide key={account.id}>
                      <AccountCard data={account} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
