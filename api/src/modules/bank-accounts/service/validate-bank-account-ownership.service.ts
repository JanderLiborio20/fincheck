import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-account.repositories';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAcountsRepo: BankAccountsRepository) {}

  async validate(userId: string, bankAccountId: string) {
    const isOwner = await this.bankAcountsRepo.findFist({
      where: { id: bankAccountId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Bank account bot found.');
    }
  }
}
