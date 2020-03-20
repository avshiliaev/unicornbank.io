import { Controller, Get } from '@nestjs/common';
import { DeveloperService } from './developer.service';

@Controller('developers')
export class DeveloperController {

  constructor(private developerService: DeveloperService) {
  }

  // Send some actions to the developers controller
  @Get('create_project')
  async createProject() {
    return 'Created';
  }
}
