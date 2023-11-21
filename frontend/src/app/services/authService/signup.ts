import { sleep } from '../../utils/sleep';
import { httpClient } from '../client/httpClient';

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
}

export async function signup(params: SignupParams) {
  await sleep(1000);

  const { data } = await httpClient.post<SignupResponse>('auth/signup', params);

  return data;
}
