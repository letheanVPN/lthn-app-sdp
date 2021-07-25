import { ApiProperty } from '@nestjs/swagger';

export class ecdhInfo {
  amount: string;
  mask: string;
}
export class MgsEntity {
  cc: string;
  ss: string[];
}
export class RangeSigsEntity {
  Ci: string;
  asig: string;
}

export class RawTransactionEntityVoutTarget {
  @ApiProperty()
  key: string;
}
export class RawTransactionEntityVout {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  target: RawTransactionEntityVoutTarget;
}
export class RawTransactionRctSignature {
  @ApiProperty()
  ecdhInfo: ecdhInfo[];
  @ApiProperty()
  outPk: string[];
  @ApiProperty()
  pseudoOuts: string[];
  @ApiProperty()
  txnFee: number;
  @ApiProperty()
  type: number;
}

export class RctSigPrunable {
  @ApiProperty()
  MGs: MgsEntity[];
  @ApiProperty()
  rangeSigs: RangeSigsEntity[];
}

export class RawTransactionEntityVinKey {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  k_image: string;
  @ApiProperty()
  key_offsets: number[];
}
export class RawTransactionEntityVin {
  key: RawTransactionEntityVinKey;
}

export class RawTransactionEntity {
  @ApiProperty()
  extra: string[];
  @ApiProperty()
  rct_signatures: RawTransactionRctSignature;
  @ApiProperty()
  rctsig_prunable: RctSigPrunable;
  @ApiProperty()
  unlock_time: number;
  @ApiProperty()
  version: number;

  @ApiProperty()
  vin: RawTransactionEntityVin[];
  @ApiProperty()
  vout: RawTransactionEntityVout[];
}
