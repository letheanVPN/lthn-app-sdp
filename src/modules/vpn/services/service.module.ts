import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { HttpModule } from '@nestjs/axios';
import { RethinkProvider } from 'src/providers/rethink/database.provider';
import { RethinkModule } from 'src/providers/rethink/rethink.module';

@Module({
  imports: [HttpModule, RethinkModule],
  controllers: [ServiceController],
  providers: [ServiceService, RethinkProvider],
})
export class ServiceModule {}
