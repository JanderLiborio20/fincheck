import { useEffect, useState } from 'react';
import { useTransactions } from '../../../../../app/hooks/useTransactions';
import { TransactionFilters } from '../../../../../app/services/transactionsService/getAll';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFilters, setIsFilters] = useState(false);
  const [filters, setFilters] = useState<TransactionFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const { transactions, isLoading, isInitialLoading, refetchTransactions } =
    useTransactions(filters);

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions]);

  function handleChangeFilters<TFilter extends keyof TransactionFilters>(
    filter: TFilter,
  ) {
    return (value: TransactionFilters[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    };
  }

  function handleApplyFilters({
    bankAccountId,
    year,
  }: {
    bankAccountId: string | undefined;
    year: number;
  }) {
    handleChangeFilters('bankAccountId')(bankAccountId);
    handleChangeFilters('year')(year);
    setIsFilters(false);
  }

  function handleOpenFiltersModal() {
    setIsFilters(true);
  }

  function handleCloseFiltersModal() {
    setIsFilters(false);
  }

  return {
    areValuesVisible,
    transactions,
    isInitialLoading: isInitialLoading,
    isLoading: isLoading,
    isFilters,
    handleOpenFiltersModal,
    handleChangeFilters,
    handleCloseFiltersModal,
    filters,
    handleApplyFilters,
  };
}
