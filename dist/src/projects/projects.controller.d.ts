import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    getAll(): Promise<import(".prisma/client").Project[]>;
}
