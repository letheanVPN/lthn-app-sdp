import { ApiProperty } from '@nestjs/swagger';
import { TxnEntity } from './txn.entity';

export class MempoolEntity {
  @ApiProperty()
  limit: number;
  @ApiProperty()
  page: number;
  @ApiProperty()
  total_page_no: number;
  @ApiProperty()
  txs?: TxnEntity[];
  @ApiProperty()
  txs_no: number;
}
