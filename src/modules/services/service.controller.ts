import { Body, Controller, Get, Optional, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse, ApiFoundResponse,
  ApiTags
} from "@nestjs/swagger";
import { ServiceEntity } from './interfaces/service.entity';
import { ServiceService } from './service.service';

@ApiTags('services')
@Controller({ version: '1', path: 'service' })
export class ServiceController {
  constructor(private servicesService: ServiceService) {}

  @Get('search')
  @ApiFoundResponse({
    description: 'Services list'
  })
  list(): string {
    return `This action returns a  cat`;
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
  async create(@Body() createServiceDto: ServiceEntity) {
    this.servicesService.create(createServiceDto);
  }
}
