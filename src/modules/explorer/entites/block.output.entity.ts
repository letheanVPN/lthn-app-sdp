export class BlockOutputEntity {
  address: string;
  height: number;

  limit: number;
  mempool: boolean;
  outputs: BlockOutputsEntity[];

  viewkey: string;
}

export class BlockOutputsEntity {
  amount: number;
  block_no: number;
  in_mempool: boolean;
  output_idx: number;
  output_pubkey: string;
  payment_id?: string;
  tx_hash: string;
}
