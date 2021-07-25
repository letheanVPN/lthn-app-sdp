import { ApiProperty } from '@nestjs/swagger';
import { MempoolEntity } from '../entites/mempool.entity';
import { SearchEntity } from '../entites/search.entity';
import { BlockEntity } from '../entites/block.entity';
import { RawBlockEntity } from '../entites/raw.block.entity';

export class RawBlockDTO {
  /**
   * payload data
   */
  data: RawBlockEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
