import { Controller, Get, Version } from '@nestjs/common';
import { ServiceEntity } from '../services/interfaces/service.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('provider')
@Controller({version: '1', path: 'provider'})
export class ProviderController {
  @Get('search')
  findAll(): ServiceEntity[] {
    return [new ServiceEntity()];
  }
}
