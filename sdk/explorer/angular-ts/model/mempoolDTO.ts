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
import { MempoolEntity } from './mempoolEntity';


export interface MempoolDTO { 
    status: MempoolDTO.StatusEnum;
    /**
     * payload data
     */
    data: MempoolEntity;
}
export namespace MempoolDTO {
    export type StatusEnum = 'success' | 'fail';
    export const StatusEnum = {
        Success: 'success' as StatusEnum,
        Fail: 'fail' as StatusEnum
    };
}


