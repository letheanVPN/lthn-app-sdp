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
import { EmissionEntity } from './emissionEntity';


export interface EmissionDTO { 
    status: EmissionDTO.StatusEnum;
    /**
     * payload data
     */
    data: EmissionEntity;
}
export namespace EmissionDTO {
    export type StatusEnum = 'success' | 'fail';
    export const StatusEnum = {
        Success: 'success' as StatusEnum,
        Fail: 'fail' as StatusEnum
    };
}


