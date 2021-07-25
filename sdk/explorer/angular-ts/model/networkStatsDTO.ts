/**
 * Lethean Explorer API
 * Lethean chain explorer API
 *
 * The version of the OpenAPI document: 1
 * Contact: contact@lethean.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { NetworkStatsEntity } from './networkStatsEntity';


export interface NetworkStatsDTO { 
    status: NetworkStatsDTO.StatusEnum;
    /**
     * payload data
     */
    data: NetworkStatsEntity;
}
export namespace NetworkStatsDTO {
    export type StatusEnum = 'success' | 'fail';
    export const StatusEnum = {
        Success: 'success' as StatusEnum,
        Fail: 'fail' as StatusEnum
    };
}


