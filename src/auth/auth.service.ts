import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  register() {
    return 'register';
  }

  async login({ logiUsua, passUsua }: loginDto) {
    const user = await this.usersService.findOneByNameUSer(logiUsua);

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (user.pass !== passUsua) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }
    const payload = { email: user.usuario };
    const token = await this.jwtService.signAsync(payload);
    return{
      token,
      rol: user.rolId,
      valid:true
    }
  }
}
