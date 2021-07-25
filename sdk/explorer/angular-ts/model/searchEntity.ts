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
import { InputsEntity } from './inputsEntity';
import { OutputEntity } from './outputEntity';


export interface SearchEntity { 
    block_height: number;
    coinbase: boolean;
    confirmations: number;
    current_height: number;
    extra: string;
    inputs: Array<InputsEntity>;
    mixin: number;
    outputs: Array<OutputEntity>;
    payment_id?: string;
    payment_id8?: string;
    rct_type: number;
    timestamp: number;
    timestamp_utc: string;
    title: string;
    tx_fee: number;
    tx_hash: string;
    tx_size: number;
    tx_version: number;
    xmr_inputs: number;
    xmr_outputs: number;
}
