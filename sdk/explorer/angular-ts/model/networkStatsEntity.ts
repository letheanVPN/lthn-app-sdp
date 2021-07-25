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


export interface NetworkStatsEntity { 
    alt_blocks_count: number;
    block_size_limit: number;
    cumulative_difficulty: number;
    current: boolean;
    difficulty: number;
    fee_per_kb: number;
    grey_peerlist_size: number;
    hash_rate: number;
    height: number;
    incoming_connections_count: number;
    outgoing_connections_count: number;
    start_time: number;
    status: boolean;
    target: number;
    target_height: number;
    testnet: boolean;
    top_block_hash: string;
    tx_count: number;
    tx_pool_size: number;
    tx_pool_size_kbytes: number;
    white_peerlist_size: number;
}

