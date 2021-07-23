import { ApiProperty } from '@nestjs/swagger';

export class CertificatesEntity {
  /**
   * ID only
   */
  @ApiProperty()
  id: number;
}
