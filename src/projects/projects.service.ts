import { Injectable } from '@nestjs/common';
import { Project } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
    constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Project[]> {
    return this.prismaService.project.findMany();
  }

}
