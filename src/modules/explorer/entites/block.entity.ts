import { TxnEntity } from './txn.entity';
import { ApiProperty } from '@nestjs/swagger';

export class BlockEntity {
  @ApiProperty()
  block_height: number;
  @ApiProperty()
  current_height: number;
  @ApiProperty()
  hash: string;
  @ApiProperty()
  size: number;
  @ApiProperty()
  timestamp: number;
  @ApiProperty()
  timestamp_utc: string;
  @ApiProperty()
  txs: TxnEntity[];
}
