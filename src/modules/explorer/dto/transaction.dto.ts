import { ApiProperty } from '@nestjs/swagger';
import { TransactionEntity } from '../entites/transaction.entity';

export class TransactionDTO {
  /**
   * payload data
   */
  data: TransactionEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
