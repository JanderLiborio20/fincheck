import { Category } from '../../entities/Category';
import { httpClient } from '../client/httpClient';

type CategoriesResponse = Array<Category>;

export async function getAll() {
  const { data } = await httpClient.get<CategoriesResponse>('/categories');

  return data;
}
