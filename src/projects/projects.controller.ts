import { Controller } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}
    
  @Get('/')
  async getAll() {
    return this.projectsService.getAll();
  }
}
