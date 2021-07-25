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
import { ProveTransferOutputsEntity } from './proveTransferOutputsEntity';


export interface ProveTransferEntity { 
    address: string;
    outputs: Array<ProveTransferOutputsEntity>;
    tx_hash: string;
    tx_prove: boolean;
    viewkey: string;
}
