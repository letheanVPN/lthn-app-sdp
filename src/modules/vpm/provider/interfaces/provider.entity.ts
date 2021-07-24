import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CertificateEntity } from './certificate.entity';

@ApiTags('vpm')
export class ProviderEntity {
  /**
   * ID of the ProviderEntity
   */
  @ApiProperty({
    minLength: 64,
    maxLength: 64,
    pattern: '[A-F0-9+/=]',
  })
  id: string;

  /**
   * Node Type
   */
  @ApiProperty({
    enum: ['residential', 'commercial', 'government'],
  })
  nodeType: string;

  /**
   * Name of the ProviderEntity
   */
  @ApiProperty({
    maxLength: 16,
    pattern: '^[a-zA-Z0-9 ,.-_]+$',
  })
  name: string;

  /**
   * Base 64 encoded certificate content
   */
  @ApiProperty()
  certificates: CertificateEntity[];

  /**
   * Wallet address
   */
  @ApiProperty({
    maxLength: 97,
    minLength: 97,
    pattern: 'iz[a-zA-Z0-9]',
  })
  wallet: string;

  /**
   * Terms of the ProviderEntity as a whole
   */
  @ApiProperty({
    maxLength: 50000,
    pattern: '[:print:]',
  })
  terms: string;
}
