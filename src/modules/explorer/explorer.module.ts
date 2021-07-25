import { Module } from '@nestjs/common';
import { ExplorerService } from './explorer.service';
import { ExplorerController } from './explorer.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ExplorerController],
  providers: [ExplorerService],
})
export class ExplorerModule {}
