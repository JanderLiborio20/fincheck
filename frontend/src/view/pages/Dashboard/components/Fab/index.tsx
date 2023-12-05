import { PlusIcon } from '@radix-ui/react-icons';
import { BankAccountIcon } from '../../../../../assets/components/BankAccountIcon';
import { CategoryIcon } from '../../../../../assets/components/Categories/CategoryIcon';
import { DropdownMenu } from '../../../../components/DropdownMenu';

export function Fab() {
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
          <DropdownMenu.Item className="gap-2">
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
