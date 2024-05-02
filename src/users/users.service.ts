import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario, Prisma } from '@prisma/client';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async getTaskById(id: number): Promise<Usuario> {
    return this.prisma.usuario.findUnique({
      where: {
        idUsuario: id,
      },
    });
  }

  async createTask(data: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({
      data,
    });
  }

  async updateTask(id: number, data: Usuario): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: {
        idUsuario: id,
      },
      data,
    });
  }

  async deleteTask(id: number): Promise<Usuario> {
    return this.prisma.usuario.delete({
      where: {
        idUsuario: id,
      },
    });
  }
}
