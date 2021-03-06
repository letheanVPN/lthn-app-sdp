import { ApiProperty } from '@nestjs/swagger';
import { BlockEntity } from '../entites/block.entity';

export class BlockDTO {
  /**
   * payload data
   */
  data: BlockEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
