import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './modules/provider/provider.module';
import { ServiceModule } from './modules/services/service.module';
import { FavouriteModule } from './modules/favourite/favourite.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
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
    FavouriteModule,
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
