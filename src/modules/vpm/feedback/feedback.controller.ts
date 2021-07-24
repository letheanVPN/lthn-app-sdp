import { Body, Controller, Get, Optional, Param, Post } from '@nestjs/common';
import { ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { FeedbackEntity } from './entities/feedback.entitty';

@ApiTags('vpm')
@Controller({ version: '1', path: 'feedback' })
export class FeedbackController {
  @Post('add')
  addFeedback(@Body() feedbackEntity: FeedbackEntity) {
    return 'Add feedback';
  }

  @Get('get/:client/:id')
  getProviderFeedback(
    @Param('client') client?: string,
    @Param('id') id?: string,
  ) {
    return new FeedbackEntity();
  }

  @Get('stats')
  getProvidersFeedback() {
    return [new FeedbackEntity(), new FeedbackEntity()];
  }
}
