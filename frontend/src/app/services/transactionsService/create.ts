import { httpClient } from '../client/httpClient';

export interface CreateTransactionParams {
  name: string;
  type: 'INCOME' | 'EXPENSE';
  bankAccountId: string;
  categoryId: string;
  value: number;
  date: string;
}

export async function create(params: CreateTransactionParams) {
  const { data } = await httpClient.post('/transactions', params);

  return data;
}
