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
import { VersionEntity } from './versionEntity';


export interface VersionDTO { 
    status: VersionDTO.StatusEnum;
    /**
     * payload data
     */
    data: VersionEntity;
}
export namespace VersionDTO {
    export type StatusEnum = 'success' | 'fail';
    export const StatusEnum = {
        Success: 'success' as StatusEnum,
        Fail: 'fail' as StatusEnum
    };
}


