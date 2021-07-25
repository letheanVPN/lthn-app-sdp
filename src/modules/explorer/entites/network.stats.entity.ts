import { ApiProperty } from '@nestjs/swagger';

export class NetworkStatsEntity {
  @ApiProperty()
  alt_blocks_count: number;
  @ApiProperty()
  block_size_limit: number;
  @ApiProperty()
  cumulative_difficulty: number;
  @ApiProperty()
  current: boolean;
  @ApiProperty()
  difficulty: number;
  @ApiProperty()
  fee_per_kb: number;
  @ApiProperty()
  grey_peerlist_size: number;
  @ApiProperty()
  hash_rate: number;
  @ApiProperty()
  height: number;
  @ApiProperty()
  incoming_connections_count: number;
  @ApiProperty()
  outgoing_connections_count: number;
  @ApiProperty()
  start_time: number;
  @ApiProperty()
  status: boolean;
  @ApiProperty()
  target: number;
  @ApiProperty()
  target_height: number;
  @ApiProperty()
  testnet: boolean;
  @ApiProperty()
  top_block_hash: string;
  @ApiProperty()
  tx_count: number;
  @ApiProperty()
  tx_pool_size: number;
  @ApiProperty()
  tx_pool_size_kbytes: number;
  @ApiProperty()
  white_peerlist_size: number;
}
