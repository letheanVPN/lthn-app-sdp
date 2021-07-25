import { ApiProperty } from '@nestjs/swagger';
import { NetworkStatsEntity } from '../entites/network.stats.entity';

export class NetworkStatsDTO {
  /**
   * payload data
   */
  data: NetworkStatsEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
