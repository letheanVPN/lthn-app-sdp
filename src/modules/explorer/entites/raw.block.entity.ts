import { ApiProperty } from '@nestjs/swagger';

export class RctSigEntity {
  type: number;
}

export class RawBlockMinerTx {
  @ApiProperty()
  extra: number[];
  @ApiProperty()
  rct_signatures: RctSigEntity;
  @ApiProperty()
  unlock_time: number;
  @ApiProperty()
  version: number;
  @ApiProperty({ required: false })
  vin: RawBlockMinerVin[];
  @ApiProperty({ required: false })
  vout: RawBlockMinerVout[];
}
export class RawBlockMinerVinGen {
  height: number;
}
export class VoutTarget {
  key: string;
}
export class RawBlockMinerVin {
  @ApiProperty()
  gen: RawBlockMinerVinGen;
}

export class RawBlockMinerVout {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  target: VoutTarget;
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
