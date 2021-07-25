import { ApiProperty } from '@nestjs/swagger';

export class MixinEntity {
  @ApiProperty()
  block_no: number;
  @ApiProperty()
  public_key: string;
}
