import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { UsersService } from '../users/users.service';
  import { Usuario } from '@prisma/client';
  
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const taskFound = await this.usersService.getTaskById(Number(id));
    if (!taskFound) throw new BadRequestException('Users does not exist');
    return taskFound;
  }
}
