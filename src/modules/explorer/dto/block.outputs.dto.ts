import { ApiProperty } from '@nestjs/swagger';
import { MempoolEntity } from '../entites/mempool.entity';
import { SearchEntity } from '../entites/search.entity';
import { BlockEntity } from '../entites/block.entity';
import { BlockOutputEntity } from '../entites/block.output.entity';

export class BlockOutputsDTO {
  /**
   * payload data
   */
  data: BlockOutputEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
