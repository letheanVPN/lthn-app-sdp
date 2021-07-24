import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './modules/vpm/provider/provider.module';
import { ServiceModule } from './modules/vpm/services/service.module';
import { FeedbackModule } from './modules/vpm/feedback/feedback.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RethinkModule } from './providers/rethink/rethink.module';
import { RethinkProvider } from './providers/rethink/database.provider';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
    }),
    ProviderModule,
    ServiceModule,
    FeedbackModule,
    RethinkModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    RethinkProvider,
  ],
})
export class AppModule {}
