import { ApiProperty } from '@nestjs/swagger';
import { VersionEntity } from '../entites/version.entity';
import { EmissionEntity } from '../entites/emission.entity';

export class EmissionDTO {
  /**
   * payload data
   */
  data: EmissionEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
