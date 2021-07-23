import { ApiProperty } from '@nestjs/swagger';
import { ServiceTypeEnum } from './ServiceTypeEnum.entity';
import { ProxySettingsEntity } from './proxy-settings.entity';
import { VpnSettingsEntity } from './vpn-settings.entity';
import { timeRangeEntity } from './time-range.entity';
import { CertificatesEntity } from './certificates.entity';

export class ServiceEntity {
  /**
   * ID of the service
   */
  @ApiProperty({
    minLength: 2,
    maxLength: 2,
    pattern: '[0-9A-F]{1}[0-9A-F]{1}',
  })
  id: string;

  /**
   * Name of the service
   */
  @ApiProperty({
    maxLength: 32,
    pattern: '^[a-zA-Z0-9 ,.-_]+$',
  })
  name: string;

  /**
   * Type of the service
   */
  @ApiProperty()
  type: ServiceTypeEnum;

  /**
   * Per minute Cost of the service
   */
  @ApiProperty({
    maxLength: 14,
    pattern: '([0-9]{1,5}|[.]{1}[0-9]{1,8})',
  })
  cost: string;

  /**
   * Amount of pre-paid minutes for first payment
   */
  @ApiProperty({
    minimum: 10,
    maximum: 1440,
  })
  firstPrePaidMinutes?: number = 10;

  /**
   * Number of verifications needed for first payment
   */
  @ApiProperty({
    minimum: 0,
    maximum: 2,
  })
  firstVerificationsNeeded?: number = 1;

  /**
   * Amount of pre-paid minutes for subsequent payments
   */
  @ApiProperty({
    minimum: 10,
    maximum: 1440,
  })
  subsequentPrePaidMinutes?: number = 10;

  /**
   * Number of verifications needed for subsequent payments
   */
  @ApiProperty({
    minimum: 0,
    maximum: 1,
  })
  subsequentVerificationsNeeded?: number = 0;

  /**
   * Whether or not refunds are allowed
   */
  @ApiProperty()
  allowRefunds?: boolean = false;

  /**
   * Service download speed in Mbits
   */
  @ApiProperty({
    minimum: 0,
    maximum: 99999999999,
  })
  downloadSpeed = 0;

  /**
   * Service upload speed in Mbits
   */
  @ApiProperty({
    minimum: 0,
    maximum: 99999999999,
  })
  uploadSpeed = 0;

  /**
   * array containing Proxy related settings. only available if service is of type proxy, null otherwise
   */
  @ApiProperty()
  proxy?: ProxySettingsEntity[];

  /**
   * array containing VPN related settings. only available if service is of type vpn, null otherwise
   */
  @ApiProperty()
  vpn?: VpnSettingsEntity[];

  @ApiProperty()
  validity?: timeRangeEntity;

  /**
   * disable or not the service
   */
  @ApiProperty()
  disable = false;

  /**
   * inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level.
   */
  @ApiProperty()
  certificates?: CertificatesEntity[];
}
