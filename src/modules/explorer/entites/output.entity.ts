import { ApiProperty } from '@nestjs/swagger';

export class OutputEntity {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  public_key: string;
}
