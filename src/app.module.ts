import { Module } from '@nestjs/common';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './common/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
    ScheduleModule,
    AuthModule,
  ],
})
export class AppModule {}
