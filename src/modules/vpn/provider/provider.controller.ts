import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProviderEntity } from './entities/provider.entity';

@ApiTags('vpn')
@Controller({ version: '1', path: 'provider' })
export class ProviderController {
  @Get('search')
  findAll(): ProviderEntity[] {
    return [new ProviderEntity()];
  }
}
