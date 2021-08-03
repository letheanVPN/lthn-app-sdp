import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
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
import { ProveTransferDTO } from './dto/prove.transfer.dto';
import { RawTransactionDTO } from './dto/raw.transaction.dto';
import { RawBlockDTO } from './dto/raw.block.dto';
import { Activity } from './dto/activity.dto';

@ApiTags('explorer')
@Controller({ version: '1', path: 'explorer' })
export class ExplorerController {
  constructor(private explorerService: ExplorerService) {}

  /**
   * Fetch transactions in memory pool
   */
  @Get('chain/mempool')
  @ApiQuery({
    name: 'limit',
    required: false,
    example: 25,
    description: 'Transactions per page',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    example: 0,
    description: 'Page to show',
  })
  getMempool(
    @Query('limit') limit: number,
    @Query('page') page: number,
  ): Promise<Observable<MempoolDTO>> {
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
  @ApiQuery({
    name: 'address',
    required: true,
    description: 'Address to check',
  })
  @ApiQuery({
    name: 'viewkey',
    required: true,
    description: 'Viewkey for the transaction',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    example: 5,
    description: 'Blocks to check',
  })
  @ApiQuery({
    name: 'mempool',
    required: false,
    example: 1,
    description: 'Check mempool',
  })
  getOutputsBlocks(
    @Query('address') address: string,
    @Query('viewkey') viewkey: string,
    @Query('limit') limit: number,
    @Query('mempool') mempool: number,
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
  getRawBlockData(@Param('id') id: string): Promise<Observable<RawBlockDTO>> {
    return this.explorerService.getRawBlockData(id);
  }

  /**
   * get the list of recent trasnactions
   * @param limit
   * @param page
   */
  @Get('chain/transactions')
  @ApiQuery({
    name: 'limit',
    required: false,
    example: 10,
    description: 'Transactions per page',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    example: 0,
    description: 'Page to show',
  })
  getTransactions(
    @Query('limit') limit: number,
    @Query('page') page: number,
  ): Promise<Observable<TransactionsDTO>> {
    return this.explorerService.getTransactions(limit, page);
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
  getRawTransactionData(
    @Param('tx_hash') tx_hash: string,
  ): Promise<Observable<RawTransactionDTO>> {
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
  @Get('chain/emission')
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

  /**
   * Project commits
   */
  @Get('activity')
  getActivity(): Promise<Observable<Activity>> {
    return this.explorerService.getActivity();
  }

  @Get('validate/transfer')
  @ApiQuery({
    name: 'txhash',
    required: true,
  })
  @ApiQuery({
    name: 'address',
    required: true,
  })
  @ApiQuery({
    name: 'viewkey',
    required: true,
  })
  @ApiQuery({
    name: 'txprove',
    required: false,
    example: true,
  })
  proveTransfer(
    @Query('txhash') txhash: string,
    @Query('address') address: string,
    @Query('viewkey') viewkey: number,
    @Query('txprove') txprove: boolean,
  ): Promise<Observable<ProveTransferDTO>> {
    return this.explorerService.proveTransfer(
      txhash,
      address,
      viewkey,
      txprove,
    );
  }
}
