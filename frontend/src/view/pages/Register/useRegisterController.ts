import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { authService } from '../../../app/services/authService';
import { SignupParams } from '../../../app/services/authService/signup';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z
    .string()
    .min(1, 'E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 dígitos'),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmiit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return await authService.signup(data);
    },
  });

  const handleSubmit = hookFormSubmiit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log('accessToken: ', accessToken);
      toast.success('B');
    } catch (error) {
      toast.error('Error ao criar sua conta');
      console.log(error);
    }
  });

  return { register, errors, handleSubmit, isPending };
}
