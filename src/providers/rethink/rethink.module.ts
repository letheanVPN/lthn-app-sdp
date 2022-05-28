import { Module } from '@nestjs/common';
import { RethinkController } from './rethink.controller';
import { RethinkProvider } from './database.provider';
import { RethinkService } from './rethink.service';

@Module({
  imports: [],
  controllers: [RethinkController],
  providers: [RethinkService, RethinkProvider],
  exports: [ RethinkService, RethinkProvider],
})
export class RethinkModule {}
