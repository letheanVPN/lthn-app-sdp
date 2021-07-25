import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { InputsEntity } from './inputs.entity';
import { OutputEntity } from './output.entity';

@ApiTags('explorer')
export class SearchEntity {
  @ApiProperty()
  block_height: number;
  @ApiProperty()
  coinbase: boolean;
  @ApiProperty()
  confirmations: number;
  @ApiProperty()
  current_height: number;
  @ApiProperty()
  extra: string;
  @ApiProperty()
  inputs: InputsEntity[];
  @ApiProperty()
  mixin: number;
  @ApiProperty()
  outputs: OutputEntity[];
  @ApiProperty()
  payment_id?: string;
  @ApiProperty()
  payment_id8?: string;
  @ApiProperty()
  rct_type: number;
  @ApiProperty()
  timestamp: number;
  @ApiProperty()
  timestamp_utc: string;
  @ApiProperty()
  title: string;
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
