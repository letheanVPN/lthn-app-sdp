import { ApiProperty } from '@nestjs/swagger';

export class EmissionEntity {
  @ApiProperty()
  blk_no: number;
  @ApiProperty()
  coinbase: number;
  @ApiProperty()
  fee: number;
}
