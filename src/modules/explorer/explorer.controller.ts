import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ExplorerService } from './explorer.service';
import { SearchDTO } from './dto/search.dto';
import { Observable } from 'rxjs';
import { BlockDTO } from './dto/block.dto';
import { MempoolDTO } from './dto/mempool.dto';
import { BlockOutputsDTO } from './dto/block.outputs.dto';
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

  @ApiParam({
    name: 'id',
    required: true,
    example: '1008663',
    description: 'Search id, must be block_number',
  })
  @Get('chain/block/raw/:id')
  getRawBlockData(@Param('id') id: string) {
    return this.explorerService.getRawBlockData(id);
  }

  @Get('chain/transaction')
  getTransaction() {
    return 'curl  -w "\\n" -X GET "http://127.0.0.1:8081/api/transaction/6093260dbe79fd6277694d14789dc8718f1bd54457df8bab338c2efa3bb0f03d"';
  }

  @Get('chain/transaction/list')
  getTransactions() {
    return 'curl  -w "\\n" -X GET "http://127.0.0.1:8081/api/transactions?page=2&limit=10"';
  }

  @Get('chain/transaction/raw/:tx_hash')
  getRawTransactionData() {
    return 'curl  -w "\\n" -X GET "http://139.162.32.245:8081/api/rawtransaction/6093260dbe79fd6277694d14789dc8718f1bd54457df8bab338c2efa3bb0f03d"';
  }

  @Get('chain/stats')
  getNetworkInfo() {
    return 'curl  -w "\\n" -X GET "http://127.0.0.1:8081/api/networkinfo"';
  }
  @Get('chain/stats/emission')
  getEmission() {
    return 'curl  -w "\\n" -X GET "http://127.0.0.1:8081/api/emission"';
  }

  @Get('chain/version')
  getVersion() {
    return this.explorerService.getVersion();
  }

  @Get('validate/outputs')
  proveOutputs() {
    return 'curl  -w "\\n" -X GET "http://127.0.0.1:8081/api/outputs?txhash=17049bc5f2d9fbca1ce8dae443bbbbed2fc02f1ee003ffdd0571996905faa831&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=0"';
  }

  @Get('validate/transfer')
  proveTransfer() {
    return 'curl  -w "\\n" -X GET "http://127.0.0.1:8082/api/outputs?txhash=94782a8c0aa8d8768afa0c040ef0544b63eb5148ca971a024ac402cad313d3b3&address=9wUf8UcPUtb2huK7RphBw5PFCyKosKxqtGxbcKBDnzTCPrdNfJjLjtuht87zhTgsffCB21qmjxjj18Pw7cBnRctcKHrUB7N&viewkey=e94b5bfc599d2f741d6f07e3ab2a83f915e96fb374dfb2cd3dbe730e34ecb40b&txprove=1"';
  }
}
