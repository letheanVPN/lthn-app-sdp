import { ApiProperty } from '@nestjs/swagger';
import { MempoolEntity } from '../entites/mempool.entity';
import { SearchEntity } from '../entites/search.entity';
import { BlockEntity } from '../entites/block.entity';

export class BlockDTO {
  /**
   * payload data
   */
  data: BlockEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
