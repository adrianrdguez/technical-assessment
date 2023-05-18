import { Injectable } from '@nestjs/common';
import { MongoClient, MongoError, InsertOneResult } from 'mongodb';
import { PageOptionsDto } from '../users-dto/page-options.dto';
import { CreateNewUserDto } from '../users-dto/create-user.dto';

@Injectable()
export class UsersService {
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

      const users = await collection.find().skip(Number(page)).limit(Number(limit)).toArray();
      console.log(users)
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


  async createUser(createUserDto: CreateNewUserDto): Promise<any> {
    const client = new MongoClient(this.mongoUrl);

    try {
      await client.connect();

      const db = client.db(this.dbName);
      const collection = db.collection(this.collectionName);

      const { _id, ...userObject } = createUserDto;

      try {
        const result: InsertOneResult<any> = await collection.insertOne(userObject);
        const insertedId = result.insertedId;

        return {
          _id: insertedId,
          ...userObject,
        };
      } catch (error) {
        if (error.code === 11000) {
          // Duplicate key error
          console.error('Duplicate user data:', error);
          throw new Error('User already exists.');
        }

        console.error('Error creating user:', error);
        throw new Error('Failed to create user in the database.');
      }
    } catch (error) {
      if (error instanceof MongoError) {
        console.error('MongoDB error:', error.message);
        throw new Error('Failed to create user in the database.');
      }

      console.error('Error creating user:', error);
      throw new Error('Internal server error');
    } finally {
      client.close();
    }
  }
}
