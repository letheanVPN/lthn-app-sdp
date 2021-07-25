import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeedbackEntity } from './entities/feedback.entitty';

@ApiTags('vpn')
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
