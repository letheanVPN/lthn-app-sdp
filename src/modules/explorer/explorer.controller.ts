import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ExplorerService } from './explorer.service';
import { SearchDTO } from './dto/search.dto';
import { Observable } from 'rxjs';
import { BlockDTO } from './dto/block.dto';
import { MempoolDTO } from './dto/mempool.dto';
import { BlockOutputsDTO } from './dto/block.outputs.dto';
import { VersionDTO } from './dto/version.dto';
import { EmissionDTO } from './dto/emission.dto';
import { NetworkStatsDTO } from './dto/network.stats.dto';
import { TransactionsDTO } from './dto/transactions.dto';
import { TransactionDTO } from './dto/transaction.dto';

@ApiTags('explorer')
@Controller({ version: '1', path: 'explorer' })
export class ExplorerController {
  constructor(private explorerService: ExplorerService) {}

  /**
   * Fetch transactions in memory pool
   */
  @Get('chain/mempool')
  @ApiParam({
    name: 'limit',
    required: false,
    example: 25,
    description: 'Transactions per page',
  })
  @ApiParam({
    name: 'page',
    required: false,
    example: 0,
    description: 'Page to show',
  })
  getMempool(limit = 25, page = 0): Promise<Observable<MempoolDTO>> {
    return this.explorerService.getMempool(limit, page);
  }

  /**
   * Search the blockhain for records
   * @param id block_number | tx_hash | block_hash
   */
  @Get('chain/search/:id')
  @ApiParam({
    name: 'id',
    required: true,
    example: 'f85dc71b11989c8bd479b41bb2a29da4856a8fd531a3d1789b4eab2390cf5b0e',
    description: 'Search id, can be block_number | tx_hash | block_hash',
  })
  searchChain(@Param('id') id: string): Promise<Observable<SearchDTO>> {
    return this.explorerService.performSearch(id);
  }

  /**
   * get the list of blocks
   * @param limit
   * @param page
   */
  @Get('chain/block')
  @ApiParam({
    name: 'limit',
    required: false,
    example: 10,
    description: 'Transactions per page',
  })
  @ApiParam({
    name: 'page',
    required: false,
    example: 0,
    description: 'Page to show',
  })
  getTransactions(limit = 10, page = 0): Promise<Observable<TransactionsDTO>> {
    return this.explorerService.getTransactions(limit, page);
  }
  /**
   * Get block data from block height
   */
  @Get('chain/block/:id')
  @ApiParam({
    name: 'id',
    required: true,
    example: '1008663',
    description: 'Search id, must be block_number',
  })
  getBlock(@Param('id') id: string): Promise<Observable<BlockDTO>> {
    return this.explorerService.getBlockData(id);
  }

  /**
   * Search for our outputs in last few blocks (up to 5 blocks), using provided address and viewkey.
   */
  @Get('chain/block/outputs')
  @ApiParam({
    name: 'address',
    required: true,
    description: 'Address to check',
  })
  @ApiParam({
    name: 'viewkey',
    required: true,
    description: 'Viewkey for the transaction',
  })
  @ApiParam({
    name: 'limit',
    required: false,
    description: 'Blocks to check',
  })
  @ApiParam({
    name: 'mempool',
    required: false,
    example: 1,
    description: 'Check mempool',
  })
  getOutputsBlocks(
    address,
    viewkey,
    limit = 5,
    mempool = 1,
  ): Promise<Observable<BlockOutputsDTO>> {
    return this.explorerService.getOutputBlocks(
      address,
      viewkey,
      limit,
      mempool,
    );
  }

  /**
   * Get raw chain data with the block ID
   */
  @Get('chain/block/raw/:id')
  @ApiParam({
    name: 'id',
    required: true,
    example: '1008663',
    description: 'Search id, must be block_number',
  })
  getRawBlockData(@Param('id') id: string) {
    return this.explorerService.getRawBlockData(id);
  }

  /**
   * Fetch data about a transaction on the Blockhain
   */
  @Get('chain/transaction/:tx_hash')
  @ApiParam({
    name: 'tx_hash',
    required: true,
    description: 'Transaction hash',
  })
  getTransaction(
    @Param('tx_hash') tx_hash: string,
  ): Promise<Observable<TransactionDTO>> {
    return this.explorerService.getTransaction(tx_hash);
  }

  /**
   * Get raw data from the chain about a transaction by its hash
   */
  @Get('chain/transaction/raw/:tx_hash')
  @ApiParam({
    name: 'tx_hash',
    required: true,
    description: 'Search id, must be tx_hash',
  })
  getRawTransactionData(@Param('tx_hash') tx_hash: string) {
    return this.explorerService.getRawTransactionData(tx_hash);
  }

  /**
   * Network stats for the chain
   */
  @Get('chain/stats')
  getNetworkInfo(): Promise<Observable<NetworkStatsDTO>> {
    return this.explorerService.getNetworkStats();
  }

  /**
   * Blockchain emission stats
   */
  @Get('chain/stats/emission')
  getEmission(): Promise<Observable<EmissionDTO>> {
    return this.explorerService.getEmission();
  }

  /**
   * Blockchain version
   */
  @Get('chain/version')
  getVersion(): Promise<Observable<VersionDTO>> {
    return this.explorerService.getVersion();
  }

  @Get('validate/transfer')
  @ApiParam({
    name: 'txhash',
    required: true,
  })
  @ApiParam({
    name: 'address',
    required: true,
  })
  @ApiParam({
    name: 'viewkey',
    required: true,
  })
  @ApiParam({
    name: 'txprove',
    required: false,
    example: true,
  })
  proveTransfer(txhash, address, viewkey = 5, txprove = true) {
    return this.explorerService.proveTransfer(
      txhash,
      address,
      viewkey,
      txprove,
    );
  }
}
