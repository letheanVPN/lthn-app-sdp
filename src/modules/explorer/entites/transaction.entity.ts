import { ApiProperty } from '@nestjs/swagger';
import { InputsEntity } from './inputs.entity';

export class TransactionEntity {
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
}
