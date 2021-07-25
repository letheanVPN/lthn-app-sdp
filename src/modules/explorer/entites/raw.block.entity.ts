import { ApiProperty } from '@nestjs/swagger';

export class RawBlockMinerTx {
  @ApiProperty()
  extra: number[];
  @ApiProperty()
  rct_signatures: {
    type: number;
  };
  @ApiProperty()
  unlock_time: number;
  @ApiProperty()
  version: number;
  @ApiProperty()
  vin: RawBlockMinerVin[];
  @ApiProperty()
  vout: RawBlockMinerVout[];
}

export class RawBlockMinerVin {
  gen: {
    height: number;
  };
}
export class RawBlockMinerVout {
  amount: number;
  target: {
    key: string;
  };
}

export class RawBlockEntity {
  @ApiProperty()
  major_version: number;
  @ApiProperty()
  miner_tx: RawBlockMinerTx;
  @ApiProperty()
  minor_version: number;
  @ApiProperty()
  nonce: number;
  @ApiProperty()
  prev_id: string;
  @ApiProperty()
  timestamp: number;
  @ApiProperty()
  tx_hashes: string[];
}
