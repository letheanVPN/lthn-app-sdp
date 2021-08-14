import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Controller({ version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}
}
