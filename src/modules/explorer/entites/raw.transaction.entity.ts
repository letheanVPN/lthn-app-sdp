import { ApiProperty } from '@nestjs/swagger';

export class RawTransactionEntity {
  @ApiProperty()
  extra: string[];
  @ApiProperty()
  rct_signatures: {
    ecdhInfo: ecdhInfo[];
    outPk: string[];
    pseudoOuts: string[];
    txnFee: number;
    type: number;
  };
  @ApiProperty()
  rctsig_prunable: {
    MGs: MgsEntity[];
    rangeSigs: RangeSigsEntity[];
  };
  @ApiProperty()
  unlock_time: number;
  @ApiProperty()
  version: number;

  @ApiProperty()
  vin: {
    key: {
      amount: number;
      k_image: string;
      key_offsets: number[];
    };
  }[];
  @ApiProperty()
  vout: {
    amount: number;
    target: {
      key: string;
    };
  }[];
}

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
