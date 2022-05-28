import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './modules/vpn/provider/provider.module';
import { ServiceModule } from './modules/vpn/services/service.module';
import { FeedbackModule } from './modules/vpn/feedback/feedback.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExplorerModule } from './modules/explorer/explorer.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RethinkModule } from './providers/rethink/rethink.module';
import { RethinkProvider } from "src/providers/rethink/database.provider";
@Module({
  imports: [

    RethinkModule,
    CacheModule.register({
      ttl: 15, // seconds
      max: 100, // maximum number of items in cache
    }),
    ProviderModule,
    ServiceModule,
    FeedbackModule,
    ExplorerModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
      exclude: ['/v*'],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    RethinkProvider
  ],
})
export class AppModule {}
