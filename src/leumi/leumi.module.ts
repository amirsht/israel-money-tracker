import { Module } from '@nestjs/common';
import { LeumiService } from './leumi.service';

@Module({
  providers: [LeumiService]
})
export class LeumiModule {}
