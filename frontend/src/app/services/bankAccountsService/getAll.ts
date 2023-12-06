import { BankAccount } from '../../entities/BankAccounts';
import { httpClient } from '../client/httpClient';

type BankAccountsResponse = Array<BankAccount>;

export async function getAll() {
  const { data } = await httpClient.get<BankAccountsResponse>('/bank-accounts');

  return data;
}
