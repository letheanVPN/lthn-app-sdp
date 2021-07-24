import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeedbackEntity } from './interfaces/feedback.entitty';

@ApiTags('vpm')
@Controller({ version: '1', path: 'feedback' })
export class FeedbackController {
  @Post('add')
  addFeedback(@Body() feedbackEntity: FeedbackEntity) {
    return 'Add feedback';
  }

  @Get('get/:client/:id')
  getProviderFeedback() {
    return new FeedbackEntity();
  }

  @Get('stats')
  getProvidersFeedback() {
    return [new FeedbackEntity(), new FeedbackEntity()];
  }
}
