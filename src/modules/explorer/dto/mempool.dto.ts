import { ApiProperty } from '@nestjs/swagger';
import { MempoolEntity } from '../entites/mempool.entity';

export class MempoolDTO {
  /**
   * payload data
   */
  data: MempoolEntity;

  @ApiProperty({ enum: ['success'] })
  status: string;
}
