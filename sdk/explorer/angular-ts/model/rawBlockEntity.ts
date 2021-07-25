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
import { RawBlockMinerTx } from './rawBlockMinerTx';


export interface RawBlockEntity { 
    major_version: number;
    miner_tx: RawBlockMinerTx;
    minor_version: number;
    nonce: number;
    prev_id: string;
    timestamp: number;
    tx_hashes: Array<string>;
}

