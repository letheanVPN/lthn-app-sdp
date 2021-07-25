import { ApiProperty } from '@nestjs/swagger';
import { TransactionsEntity } from '../entites/transactions.entity';

export class TransactionsDTO {
  /**
   * payload data
   */
  data: TransactionsEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
