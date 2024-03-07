import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        tasks: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            priority: import(".prisma/client").$Enums.Priority;
            isCompleted: boolean;
            userId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string;
        password: string;
        workInterval: number;
        breakInterval: number;
        intervalsCount: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string;
        password: string;
        workInterval: number;
        breakInterval: number;
        intervalsCount: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getProlife(id: string): Promise<{
        user: {
            tasks: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                priority: import(".prisma/client").$Enums.Priority;
                isCompleted: boolean;
                userId: string;
            }[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string;
            workInterval: number;
            breakInterval: number;
            intervalsCount: number;
        };
        statistics: {
            label: string;
            value: number;
        }[];
    }>;
    create(dto: AuthDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string;
        password: string;
        workInterval: number;
        breakInterval: number;
        intervalsCount: number;
    }>;
    update(id: string, dto: UserDto): Promise<{
        email: string;
        name: string;
    }>;
}
