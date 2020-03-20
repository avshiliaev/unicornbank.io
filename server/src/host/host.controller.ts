import { Controller, Get } from '@nestjs/common';
import { HostService } from './host.service';

@Controller('hosts')
export class HostController {

  constructor(private hostService: HostService) {
  }

  // Send some actions to the hosts controller
  @Get('create_project')
  async createProject() {
    return 'Created';
  }
}
