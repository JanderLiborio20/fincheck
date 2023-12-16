import { User } from '../../entities/User';
import { httpClient } from '../client/httpClient';

type MeResponse = User;

export async function me() {
  const { data } = await httpClient.get<MeResponse>('users/me');

  return data;
}
