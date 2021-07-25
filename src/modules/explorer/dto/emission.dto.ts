import { ApiProperty } from '@nestjs/swagger';
import { EmissionEntity } from '../entites/emission.entity';

export class EmissionDTO {
  /**
   * payload data
   */
  data: EmissionEntity;

  @ApiProperty({ enum: ['success', 'fail'] })
  status: string;
}
