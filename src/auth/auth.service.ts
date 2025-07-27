import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';
import { createSupabaseClient } from 'src/providers/supabase/supabase';

@Injectable()
export class AuthService {
  private supabase: any;
  constructor(private configService: ConfigService) {
    this.supabase = createSupabaseClient(this.configService);
  }
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async login(email: string, password: string) {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
  async logout() {
    try {
      const { error } = await this.supabase.auth.signOut();

      if (error) {
        throw new Error(error.message);
      }

      return { message: 'Sesión cerrada exitosamente' };
    } catch (error) {
      return { error: error.message };
    }
  }
}
