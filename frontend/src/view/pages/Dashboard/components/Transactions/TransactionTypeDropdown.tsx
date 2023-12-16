import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ExpensesIcon } from '../../../../../assets/components/ExpensesIcon';
import { IncomeIcon } from '../../../../../assets/components/IncomeIcon';
import { TransactionsIcon } from '../../../../../assets/components/TransactionsIcon';
import { DropdownMenu } from '../../../../components/DropdownMenu';

interface TransactionTypeDropdownProps {
  onSelect(trpe: 'INCOME' | 'EXPENSE' | undefined): void;
  selectedType: 'INCOME' | 'EXPENSE' | undefined;
}

export function TransactionTypeDropdown({
  onSelect,
  selectedType,
}: TransactionTypeDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="flex items-center gap-2">
          {selectedType === 'EXPENSE' && <ExpensesIcon />}
          {selectedType === 'INCOME' && <IncomeIcon />}
          {selectedType === undefined && <TransactionsIcon />}

          <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
            {selectedType === 'EXPENSE' && 'Despesas'}
            {selectedType === 'INCOME' && 'Receitas'}
            {selectedType === undefined && 'Transaçõess'}
          </span>
          <ChevronDownIcon className="text-gray-900" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[279px]">
        <DropdownMenu.Item
          className="gap-2"
          onSelect={() => onSelect('INCOME')}
        >
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="gap-2"
          onSelect={() => onSelect('EXPENSE')}
        >
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="gap-2"
          onSelect={() => onSelect(undefined)}
        >
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
