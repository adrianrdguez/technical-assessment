import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  @ApiOperation({ description: 'Get all users' })
  async getUsers(@Res() res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(HttpStatus.OK).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }
  }
}