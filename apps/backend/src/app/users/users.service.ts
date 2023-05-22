import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoClient, MongoError } from 'mongodb';
import { PageOptionsDto } from '../users-dto/page-options.dto';
import { CreateNewUserDto } from '../users-dto/create-user.dto';
import { User } from './user.schema';
import { format } from 'date-fns';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }

  private dbName = 'ucademy';
  private collectionName = 'users';
  private mongoUrl = 'mongodb://localhost:27017';

  async getAllUsers(pageOptions: PageOptionsDto): Promise<any[]> {
    const client = new MongoClient(this.mongoUrl);

    try {
      await client.connect();

      const db = client.db(this.dbName);
      const collection = db.collection(this.collectionName);

      let { page, limit } = pageOptions;

      const users = await collection
        .find()
        .skip(Number(page))
        .limit(Number(limit))
        .toArray();

      return users;
    } catch (error) {
      if (error instanceof MongoError) {
        console.error('MongoDB error:', error.message);
        throw new Error('Failed to fetch users from the database.');
      }

      console.error('Error fetching users:', error);
      throw new Error('Internal server error');
    } finally {
      client.close();
    }
  }

  async createUser(createUserDto: CreateNewUserDto): Promise<User> {
    try {
      const createdUser = new this.userModel({
        ...createUserDto,
        isOnline: false,
        inscriptionDate: format(new Date(), 'dd/MM/yyyy'),
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/26/2621da26f5c7e9163a60f0a9d1129f5e53984663.jpg',
        courses: [],
      });

      const savedUser = await createdUser.save();
      console.log(savedUser)
      return savedUser;
    } catch (error) {
      if (error.code === 11000 && error.keyPattern.email) {
        throw new Error('Email already exists.');
      }
      if (error.code === 11000 && error.keyPattern.username) {
        throw new Error('Username already exists.');
      }

      console.error('Error creating user:', error);
      throw new Error('Failed to create user in the database.');
    }
  }

  async updateUser(id: string, updateUserDto: Partial<User>): Promise<User | null> {
    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
      return updatedUser;
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Failed to update user in the database.');
    }
  }
}

