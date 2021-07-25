import { ApiProperty } from '@nestjs/swagger';
import { BlockOutputEntity } from '../entites/block.output.entity';

export class BlockOutputsDTO {
  /**
   * payload data
   */
  data: BlockOutputEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
