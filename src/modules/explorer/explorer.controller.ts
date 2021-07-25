import { Controller, Get } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ExplorerService } from './explorer.service';
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
  getMempool(limit = 25, page = 0) {
    return this.explorerService.getMempool(limit, page);
  }

  @Get('chain/search')
  searchChain() {
    return 'curl  -w "\\n" -X GET "http://127.0.0.1:8081/api/search/1293669"';
  }

  @Get('chain/block')
  getBlock() {
    return 'curl  -w "\\n" -X GET "http://139.162.32.245:8081/api/block/1293257"';
  }

  @Get('chain/block/outputs')
  getOutputsBlocks() {
    return 'curl  -w "\\n" -X GET http://127.0.0.1:8081/api/outputsblocks?address=9sDyNU82ih1gdhDgrqHbEcfSDFASjFgxL9B9v5f1AytFUrYsVEj7bD9Pyx5Sw2qLk8HgGdFM8qj5DNecqGhm24Ce6QwEGDi&viewkey=807079280293998634d66e745562edaaca45c0a75c8290603578b54e9397e90a&limit=5&mempool=1';
  }

  @Get('chain/block/raw/:block_id')
  getRawBlockData() {
    return 'curl  -w "\\n" -X GET "http://139.162.32.245:8081/api/rawblock/1293257"';
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
    return 'curl  -w "\\n" -X GET "http://127.0.0.1:8081/api/version"';
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
