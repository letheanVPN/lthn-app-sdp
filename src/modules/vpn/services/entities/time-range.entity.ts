import { ApiProperty } from '@nestjs/swagger';

export class timeRangeEntity {
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    description: 'YYYY-MM-DDT00:00:00Z',
  })
  from: string;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    description: 'YYYY-MM-DDT00:00:00Z',
  })
  to: string;
}
