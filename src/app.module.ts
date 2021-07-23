import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './modules/provider/provider.module';
import { ServiceModule } from './modules/services/service.module';
import { FavouriteModule } from './modules/favourite/favourite.module';
import { FeedbackModule } from './modules/feedback/feedback.module';

@Module({
  imports: [
    ProviderModule,
    ServiceModule,
    FavouriteModule,
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
