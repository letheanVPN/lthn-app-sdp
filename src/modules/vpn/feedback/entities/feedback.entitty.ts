import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('vpn')
export class FeedbackEntity {
  /**
   * User ID
   */
  @ApiProperty({
    pattern: 'iz[a-zA-Z0-9]',
    maxLength: 97,
    minLength: 97,
  })
  id: string;

  /**
   * Provider ID
   */
  @ApiProperty({
    pattern: '[A-Za-z0-9+/=!@#$&:;.,{}]',
    minLength: 64,
    maxLength: 64,
  })
  provider: string;

  /**
   * Services ID
   */
  @ApiProperty({
    maxLength: 2,
    minLength: 2,
    pattern: '[0-9A-F]{1}[1-9A-F]{1}',
  })
  services: string;

  /**
   * Feedback-Speed - [0-5]
   */
  @ApiProperty({
    pattern: '[0-5]{1}',
    minimum: 0,
    maximum: 5,
  })
  speed: number;

  /**
   * Feedback-Stability- [0-5]
   */
  @ApiProperty({
    minimum: 0,
    maximum: 5,
    pattern: '[0-5]{1}',
  })
  stability: number;
}
