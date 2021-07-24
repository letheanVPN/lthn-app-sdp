import { Controller, Param, Post } from '@nestjs/common';
import { RethinkService } from './rethink.service';

@Controller('rethink')
export class RethinkController {
  constructor(private readonly rethinkService: RethinkService) {}

  // @Post('table/:name')
  // async newTable(@Param('name') name): Promise<string> {
  //   return await this.rethinkService
  //     .createTable(name)
  //     .then((result) => {
  //       return 'Name ' + name + ' received!\n' + JSON.stringify(result);
  //     })
  //     .catch((reason) => {
  //       return reason;
  //     });
  // }
}
