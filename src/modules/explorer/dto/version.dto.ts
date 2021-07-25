import { ApiProperty } from '@nestjs/swagger';
import { VersionEntity } from '../entites/version.entity';

export class VersionDTO {
  /**
   * payload data
   */
  data: VersionEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
