import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/category.repositories';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  findAllByUserId(userId: string) {
    return this.categoriesRepo.findMany({
      where: { userId },
    });
  }
}
