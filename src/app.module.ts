import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeumiModule } from './leumi/leumi.module';

@Module({
  imports: [LeumiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
