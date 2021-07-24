import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { RethinkModule } from '../../providers/rethink/rethink.module';

@Module({
  imports: [RethinkModule],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
