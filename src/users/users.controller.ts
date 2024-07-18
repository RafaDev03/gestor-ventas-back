import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Usuario } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const userFound = await this.usersService.getUserById(Number(id));
    if (!userFound) throw new BadRequestException('Users does not exist');
    return userFound;
  }

  
}

