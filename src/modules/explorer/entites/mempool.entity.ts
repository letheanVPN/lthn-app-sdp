import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class MempoolEntityDTO {
  /**
   * payload data
   */
  data: MempoolEntity;

  @ApiProperty({ enum: ['success'] })
  status: string;
}

export class MempoolEntity {
  @ApiProperty()
  limit: number;
  @ApiProperty()
  page: number;
  @ApiProperty()
  total_page_no: number;
  @ApiProperty()
  txs?: MempoolTxnEntity[];
  @ApiProperty()
  txs_no: number;
}

export class MempoolTxnEntity {
  @ApiProperty()
  coinbase: boolean;
  @ApiProperty()
  extra: string;
  @ApiProperty()
  mixin: number;
  @ApiPropertyOptional()
  payment_id?: string;
  @ApiPropertyOptional()
  payment_id8?: string;
  @ApiProperty()
  rct_type: number;
  @ApiProperty()
  timestamp: number;
  @ApiProperty()
  timestamp_utc: string;
  @ApiProperty()
  tx_fee: number;
  @ApiProperty()
  tx_hash: string;
  @ApiProperty()
  tx_size: number;
  @ApiProperty()
  tx_version: number;
  @ApiProperty()
  xmr_inputs: number;
  @ApiProperty()
  xmr_outputs: number;
}
