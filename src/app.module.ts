import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './modules/vpn/provider/provider.module';
import { ServiceModule } from './modules/vpn/services/service.module';
import { FeedbackModule } from './modules/vpn/feedback/feedback.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RethinkModule } from './providers/rethink/rethink.module';
import { RethinkProvider } from './providers/rethink/database.provider';
import { ExplorerModule } from './modules/explorer/explorer.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
    }),
    ProviderModule,
    ServiceModule,
    FeedbackModule,
    ExplorerModule,
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
