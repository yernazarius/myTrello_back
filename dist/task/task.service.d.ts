import { PrismaService } from 'src/prisma.service';
import { TaskDto } from './task.dto';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import(".prisma/client").$Enums.Priority;
        isCompleted: boolean;
        userId: string;
    }[]>;
    create(dto: TaskDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import(".prisma/client").$Enums.Priority;
        isCompleted: boolean;
        userId: string;
    }>;
    update(dto: Partial<TaskDto>, taskId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import(".prisma/client").$Enums.Priority;
        isCompleted: boolean;
        userId: string;
    }>;
    delete(taskid: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import(".prisma/client").$Enums.Priority;
        isCompleted: boolean;
        userId: string;
    }>;
}
