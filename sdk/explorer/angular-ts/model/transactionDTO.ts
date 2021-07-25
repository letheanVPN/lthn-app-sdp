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
import { TransactionEntity } from './transactionEntity';


export interface TransactionDTO { 
    status: TransactionDTO.StatusEnum;
    /**
     * payload data
     */
    data: TransactionEntity;
}
export namespace TransactionDTO {
    export type StatusEnum = 'success' | 'fail';
    export const StatusEnum = {
        Success: 'success' as StatusEnum,
        Fail: 'fail' as StatusEnum
    };
}

