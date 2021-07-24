// tslint:disable
/**
 * Lethean VPM
 * Distributed Virtual Private Marketplace
 *
 * The version of the OpenAPI document: 1
 * Contact: contact@lethean.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    CertificatesEntity,
    ProxySettingsEntity,
    TimeRangeEntity,
    VpnSettingsEntity,
} from './';

/**
 * @export
 * @interface ServiceEntity
 */
export interface ServiceEntity {
    /**
     * ID of the service
     * @type {string}
     * @memberof ServiceEntity
     */
    id?: string;
    /**
     * Name of the service
     * @type {string}
     * @memberof ServiceEntity
     */
    name: string;
    /**
     * Type of the service
     * @type {string}
     * @memberof ServiceEntity
     */
    type: ServiceEntityTypeEnum;
    /**
     * Per minute Cost of the service
     * @type {string}
     * @memberof ServiceEntity
     */
    cost: string;
    /**
     * Amount of pre-paid minutes for first payment
     * @type {number}
     * @memberof ServiceEntity
     */
    firstPrePaidMinutes?: number;
    /**
     * Number of verifications needed for first payment
     * @type {number}
     * @memberof ServiceEntity
     */
    firstVerificationsNeeded?: number;
    /**
     * Amount of pre-paid minutes for subsequent payments
     * @type {number}
     * @memberof ServiceEntity
     */
    subsequentPrePaidMinutes?: number;
    /**
     * Number of verifications needed for subsequent payments
     * @type {number}
     * @memberof ServiceEntity
     */
    subsequentVerificationsNeeded?: number;
    /**
     * Whether or not refunds are allowed
     * @type {boolean}
     * @memberof ServiceEntity
     */
    allowRefunds?: boolean;
    /**
     * Service download speed in Mbits
     * @type {number}
     * @memberof ServiceEntity
     */
    downloadSpeed: number;
    /**
     * Service upload speed in Mbits
     * @type {number}
     * @memberof ServiceEntity
     */
    uploadSpeed: number;
    /**
     * array containing Proxy related settings. only available if service is of type proxy, null otherwise
     * @type {Array<ProxySettingsEntity>}
     * @memberof ServiceEntity
     */
    proxy?: Array<ProxySettingsEntity>;
    /**
     * array containing VPN related settings. only available if service is of type vpn, null otherwise
     * @type {Array<VpnSettingsEntity>}
     * @memberof ServiceEntity
     */
    vpn?: Array<VpnSettingsEntity>;
    /**
     * @type {TimeRangeEntity}
     * @memberof ServiceEntity
     */
    validity?: TimeRangeEntity;
    /**
     * disable or not the service
     * @type {boolean}
     * @memberof ServiceEntity
     */
    disable: boolean;
    /**
     * inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level.
     * @type {Array<CertificatesEntity>}
     * @memberof ServiceEntity
     */
    certificates?: Array<CertificatesEntity>;
}

/**
 * @export
 * @enum {string}
 */
export enum ServiceEntityTypeEnum {
    Vpn = 'vpn',
    Proxy = 'proxy'
}
