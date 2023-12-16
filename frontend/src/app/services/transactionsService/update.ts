import { httpClient } from '../client/httpClient';

export interface UpdateTransactionParams {
  id: string;
  name: string;
  type: 'INCOME' | 'EXPENSE';
  bankAccountId: string;
  categoryId: string;
  value: number;
  date: string;
}

export async function update({ id, ...params }: UpdateTransactionParams) {
  const { data } = await httpClient.put(`/transactions/${id}`, params);

  return data;
}
