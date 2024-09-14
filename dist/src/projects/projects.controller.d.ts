import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        paragrapgh1: string;
        paragrapgh2: string;
        mainImg: string;
        gallery: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        paragrapgh1: string;
        paragrapgh2: string;
        mainImg: string;
        gallery: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
