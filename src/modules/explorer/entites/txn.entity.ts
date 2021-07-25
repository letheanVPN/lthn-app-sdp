import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TxnEntity {
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
