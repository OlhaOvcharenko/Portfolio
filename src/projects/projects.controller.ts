import { Controller } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}
    
  @Get('/')
  async getAll() {
    return this.projectsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id',) id: string) {
    const project = this.projectsService.getById(id);
    if(!project) throw new NotFoundException('Product not found');
    return project;
  }
}
