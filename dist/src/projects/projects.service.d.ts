import { Project } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProjectsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Project[]>;
    getById(id: Project['id']): Promise<Project | null>;
}
