import { Post, Body, Controller, Get, HttpStatus, Res, Query, HttpException, Put, Param } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { ApiOperation } from '@nestjs/swagger';
import { PageOptionsDto } from '../users-dto/page-options.dto';
import { CreateNewUserDto } from '../users-dto/create-user.dto';
import { User } from '../users/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post()
  @ApiOperation({ description: 'Create new user.' })
  async createUser(@Body() createUserDto: CreateNewUserDto): Promise<any> {
    try {
      const user = await this.userService.createUser(createUserDto);
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      if (error.message === 'User already exists.') {
        throw new HttpException('User already exists.', HttpStatus.CONFLICT);
      } else {
        throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Get()
  @ApiOperation({ description: 'Get all users.' })
  async getUsers(@Query() pageOptions: PageOptionsDto, @Res() res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers(pageOptions);
      res.status(HttpStatus.OK).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }
  }

  @Put(':id')
  @ApiOperation({ description: 'Update user by ID.' })
  async updateUser(@Param('id') id: string, @Body() updateUserDto: Partial<User>): Promise<any> {
    try {
      const updatedUser = await this.userService.updateUser(id, updateUserDto);
      if (!updatedUser) {
        throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
      }
      console.log(updatedUser)
      return updatedUser;
    } catch (error) {
      console.error('Error updating user:', error);
      throw new HttpException('Failed to update user.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}