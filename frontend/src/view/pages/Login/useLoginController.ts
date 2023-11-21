import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { authService } from '../../../app/services/authService';
import { SigninParams } from '../../../app/services/authService/signin';

const schema = z.object({
  email: z
    .string()
    .min(1, 'E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 dígitos'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmiit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return await authService.signin(data);
    },
  });

  const handleSubmit = hookFormSubmiit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log('accessToken: ', accessToken);
    } catch (error) {
      toast.error('Credenciais inválidas!');
      console.log(error);
    }
  });

  return { handleSubmit, register, errors, isPending };
}
