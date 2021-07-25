import { TxnEntity } from './txn.entity';
import { ApiProperty } from '@nestjs/swagger';

export class TransactionsEntity {
  @ApiProperty()
  blocks: TransactionBlock[];
  @ApiProperty()
  current_height: number;
  @ApiProperty()
  limit: number;
  @ApiProperty()
  page: number;
  @ApiProperty()
  total_page_no: number;
}

export class TransactionBlock {
  @ApiProperty()
  age: string;
  @ApiProperty()
  hash: string;
  @ApiProperty()
  height: number;
  @ApiProperty()
  size: number;
  @ApiProperty()
  timestamp: number;
  @ApiProperty()
  timestamp_utc: string;
  @ApiProperty()
  txs: TxnEntity[];
}
