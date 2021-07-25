import { ApiProperty } from '@nestjs/swagger';
import { MixinEntity } from './mixin.entity';

export class InputsEntity {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  key_image: string;
  @ApiProperty()
  mixins: MixinEntity[];
}
