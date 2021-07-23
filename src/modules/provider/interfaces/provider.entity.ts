import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class ProviderEntity {
  @ApiProperty({
    type: 'string',
    minLength: 64,
    maxLength: 64,
    description: 'ID of the ProviderEntity',
    pattern: '[A-F0-9+/=]',
  })
  id: string;

  @ApiProperty({
    type: 'string',
    enum: ['residential', 'commercial', 'government'],
    description: 'Node Type',
  })
  nodeType: string;

  @ApiProperty({
    type: 'string',
    maxLength: 16,
    description: 'Name of the ProviderEntity',
    pattern: '^[a-zA-Z0-9 ,.-_]+$',
  })
  name: string;

  @ApiProperty({
    type: 'array',
    description: 'Base 64 encoded certificate content',
    properties: {
      content: {
        type: 'string',
        description: 'Base 64 encoded',
        pattern:
          '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$',
      },
      id: { type: 'number' },
      //certificates:{type: 'array', description: 'Base 64 encoded strings of certificates for Proxy service only', pattern: '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$'},
      //cn: {type: 'string', description: 'Common name of certificates', pattern:"[a-zA-z .]"}
    },
  })
  certificates: [];

  @ApiProperty({
    type: 'string',
    maxLength: 97,
    minLength: 97,
    description: 'Wallet address',
    pattern: 'iz[a-zA-Z0-9]',
  })
  wallet: string;

  @ApiProperty({
    type: 'string',
    maxLength: 50000,
    description: 'Terms of the ProviderEntity as a whole',
    pattern: '[:print:]',
  })
  terms: string;
}
