import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('vpn')
export class CertificateEntity {
  @ApiProperty()
  id: number;
  /**
   * Common name of certificates
   */
  @ApiProperty({ pattern: '[a-zA-z .]' })
  cn: string;
  /**
   * Base 64 encoded strings of certificates for Proxy service only
   */
  @ApiProperty({
    pattern: '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$',
  })
  certificates: [];
}
