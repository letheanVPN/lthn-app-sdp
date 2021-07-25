import { ApiProperty } from '@nestjs/swagger';

export class ProveTransferEntity {
  @ApiProperty()
  address: string;
  @ApiProperty()
  outputs: ProveTransferOutputsEntity[];
  @ApiProperty()
  tx_hash: string;
  @ApiProperty()
  tx_prove: boolean;
  @ApiProperty()
  viewkey: string;
}

export class ProveTransferOutputsEntity {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  match: boolean;
  @ApiProperty()
  output_idx: number;
  @ApiProperty()
  output_pubkey: string;
}
