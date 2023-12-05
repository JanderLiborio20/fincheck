import { useState } from 'react';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFilters, setIsFilters] = useState(false);

  function handleOpenFiltersModal() {
    setIsFilters(true);
  }

  function handleCloseFiltersModal() {
    setIsFilters(false);
  }

  return {
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: false,
    isFilters,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
