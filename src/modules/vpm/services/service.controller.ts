import { Body, Controller, Get, Optional, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ServiceEntity } from './entities/service.entity';
import { ServiceService } from './service.service';

@ApiTags('vpm')
@Controller({ version: '1', path: 'service' })
export class ServiceController {
  constructor(private servicesService: ServiceService) {}

  @Get('search')
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

  @Get('search/:client')
  findOne(@Optional() @Param('client') client: string): string {
    console.log(client);
    return `This action returns a #${client} cat`;
  }

  @Post('add')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ServiceEntity,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async createService(
    @Body() createServiceDto: ServiceEntity,
  ): Promise<ServiceEntity> {
    return await this.servicesService
      .newService(createServiceDto)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  }
}
