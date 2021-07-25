import { ApiProperty } from '@nestjs/swagger';
import { RawBlockEntity } from '../entites/raw.block.entity';

export class RawBlockDTO {
  /**
   * payload data
   */
  data: RawBlockEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
