import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ServiceEntity } from './interfaces/service.entity';
import { ServiceService } from './service.service';

@ApiTags('services')
@Controller({ version: '1', path: 'service' })
export class ServiceController {
  constructor(private servicesService: ServiceService) {}

  @Get('search')
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('search/:client')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
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
