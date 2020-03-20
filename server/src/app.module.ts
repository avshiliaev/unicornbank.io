import { Module } from '@nestjs/common';
import { HostModule } from './host/host.module';
import { DeveloperModule } from './developer/developer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [HostModule, DeveloperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
