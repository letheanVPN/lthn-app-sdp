import { ApiProperty } from '@nestjs/swagger';
import { RawTransactionEntity } from '../entites/raw.transaction.entity';

export class RawTransactionDTO {
  /**
   * payload data
   */
  data: RawTransactionEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
