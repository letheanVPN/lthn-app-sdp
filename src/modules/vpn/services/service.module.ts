import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { HttpModule } from '@nestjs/axios';
import { RethinkProvider } from '../../../providers/rethink/database.provider';

@Module({
  imports: [HttpModule],
  controllers: [ServiceController],
  providers: [ServiceService, RethinkProvider],
})
export class ServiceModule {}
