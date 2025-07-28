import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    const result = await this.authService.login(email, password);

    if ('error' in result) {
      throw new BadRequestException(result.error);
    }

    return {
      message: 'Login successful',
      session: result.session,
      user: result.user,
    };
  }
  @Post('logout')
  async logout() {
    const result = await this.authService.logout();

    if ('error' in result) {
      throw new BadRequestException(result.error);
    }

    return result;
  }
}
