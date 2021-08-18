import { Controller, Get } from '@nestjs/common';
import { ApiFoundResponse, ApiTags } from '@nestjs/swagger';
import { ServiceEntity } from './entities/service.entity';
import { ServiceService } from './service.service';

@ApiTags('vpn')
@Controller({ version: '1', path: 'services' })
export class ServiceController {
  constructor(private servicesService: ServiceService) {}

  @Get('public-nodes')
  @ApiFoundResponse({
    description: 'Services list',
  })
  async listServices(): Promise<ServiceEntity[]> {
    return await this.servicesService
      .listServices()
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  }

  @Get('search')
  async queryServices(): Promise<ServiceEntity[]> {
    return await this.servicesService
      .queryServices()
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  }
}
