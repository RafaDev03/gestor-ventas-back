import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario, Prisma } from '@prisma/client';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async getUserById(id: number): Promise<Usuario> {
    return this.prisma.usuario.findUnique({
      where: {
        idUsuario: id,
      },
    });
  }

  async createUser(data: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({
      data,
    });
  }

  async updateUser(id: number, data: Usuario): Promise<Usuario> {
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

  async findOneByNameUSer(nameUser: string): Promise<Usuario> {
    return this.prisma.usuario.findFirst({
      where:{
        usuario: nameUser,
      },
    });
}

  
}
