import { ApiProperty } from '@nestjs/swagger';
import { MempoolEntity } from '../entites/mempool.entity';
import { SearchEntity } from '../entites/search.entity';

export class SearchDTO {
  /**
   * payload data
   */
  data: SearchEntity;

  @ApiProperty({ enum: ['success'] })
  status: string;
}
