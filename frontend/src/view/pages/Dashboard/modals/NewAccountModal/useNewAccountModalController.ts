import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { bankAccountService } from '../../../../../app/services/bankAccountsService';
import { BankAccountParams } from '../../../../../app/services/bankAccountsService/create';
import { currencyStringToNumber } from '../../../../../app/utils/currencyStringToNumber';
import { useDashboard } from '../../components/DashboardContext/useDashboard';

const schema = z.object({
  initialBalance: z.string().min(1, 'Saldo inicial é obrigatório'),
  name: z.string().min(1, 'Nome da Conta é obrigatório'),
  type: z.enum(['CHECKING', 'INVESTMENT', 'CASH']),
  color: z.string().min(1, 'Cor é obrigatório'),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      color: '',
      initialBalance: '0',
      name: '',
      type: 'CHECKING',
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: BankAccountParams) => {
      return await bankAccountService.create(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });

      toast.success('Conta foi cadastrada com sucesso!');
      closeNewAccountModal();
      reset();
    } catch {
      toast.error('Error ao cadastrar a conta!');
    }
  });

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isPending,
  };
}
