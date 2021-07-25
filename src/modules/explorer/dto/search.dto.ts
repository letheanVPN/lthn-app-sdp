import { ApiProperty } from '@nestjs/swagger';
import { SearchEntity } from '../entites/search.entity';

export class SearchDTO {
  /**
   * payload data
   */
  data: SearchEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
