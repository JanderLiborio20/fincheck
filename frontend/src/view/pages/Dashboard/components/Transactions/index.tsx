import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../../assets/components/Categories/CategoryIcon';
import { FilterIcon } from '../../../../../assets/components/FilterIcon';
import emptyStateImage from '../../../../../assets/empty-state.svg';
import { Spinner } from '../../../../components/Spinner';
import { FiltersModal } from './FiltersModal';
import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
  const {
    areValuesVisible,
    isLoading,
    transactions,
    isInitialLoading,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    isFilters,
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      {isInitialLoading && (
        <div className="h-full w-full flex items-center justify-center">
          <Spinner className="h-10 w-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <FiltersModal
            onClose={handleCloseFiltersModal}
            open={isFilters}
            title="Filtros"
          />

          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />

              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>

            <div className="mt-6 relative">
              <Swiper slidesPerView={3} centeredSlides>
                <SliderNavigation />

                {MONTHS.map((month, index) => (
                  <SwiperSlide key={`${month}${index}`}>
                    {({ isActive }) => (
                      <SliderOption
                        isActive={isActive}
                        month={month}
                        index={index}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <Spinner className="h-10 w-10" />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <img src={emptyStateImage} alt="empty state" />
                <p className="text-gray-700">
                  Não encontramos nenhuma transação
                </p>
              </div>
            )}

            {hasTransactions && !isLoading && (
              <>
                {Array.from({ length: 2 }, () => (
                  <>
                    <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                      <div className="flex-1 flex items-center gap-3">
                        <CategoryIcon type="expense" />

                        <div>
                          <strong className="font-bold tracking-[-0.5px] block">
                            Almoço
                          </strong>
                          <span className="text-sm text-gray-600">
                            04/12/2023
                          </span>
                        </div>
                      </div>

                      <span
                        className={cn(
                          `text-red-800 tracking-[-0.5px] font-medium`,
                          !areValuesVisible && 'blur-sm',
                        )}
                      >
                        - {formatCurrency(100)}
                      </span>
                    </div>

                    <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                      <div className="flex-1 flex items-center gap-3">
                        <CategoryIcon type="income" />

                        <div>
                          <strong className="font-bold tracking-[-0.5px] block">
                            Salário
                          </strong>
                          <span className="text-sm text-gray-600">
                            04/12/2023
                          </span>
                        </div>
                      </div>

                      <span
                        className={cn(
                          `text-green-800 tracking-[-0.5px] font-medium`,
                          !areValuesVisible && 'blur-sm',
                        )}
                      >
                        {formatCurrency(100)}
                      </span>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
