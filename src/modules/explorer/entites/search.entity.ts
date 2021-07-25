import { ApiProperty, ApiTags } from '@nestjs/swagger';

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

export class InputsEntity {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  key_image: string;
  @ApiProperty()
  mixins: MixinEntity[];
}

export class MixinEntity {
  @ApiProperty()
  block_no: number;
  @ApiProperty()
  public_key: string;
}

export class OutputEntity {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  public_key: string;
}
