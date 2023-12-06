import { PlusIcon } from '@radix-ui/react-icons';
import { BankAccountIcon } from '../../../../../assets/components/BankAccountIcon';
import { CategoryIcon } from '../../../../../assets/components/Categories/CategoryIcon';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { useDashboard } from '../DashboardContext/useDashboard';

export function Fab() {
  const { openNewAccountModal, openNewTransactionModal } = useDashboard();

  return (
    <div className="fixed right-4 bottom-4 ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className="rounded-full w-12 h-12 flex items-center bg-teal-900 justify-center
         text-white"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="mr-5">
          <DropdownMenu.Item
            className="gap-2"
            onSelect={() => openNewTransactionModal('EXPENSE')}
          >
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="gap-2"
            onSelect={() => openNewTransactionModal('INCOME')}
          >
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2" onSelect={openNewAccountModal}>
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
