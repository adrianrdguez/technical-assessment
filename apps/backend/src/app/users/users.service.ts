import { Injectable } from '@nestjs/common';
import { MongoClient, MongoError } from 'mongodb';
import { PageOptionsDto } from '../users-dto/page-options.dto';

@Injectable()
export class UsersService {

  async getAllUsers(pageOptions: PageOptionsDto): Promise<any[]> {
    const dbName = 'ucademy';
    const collectionName = 'users';
    const mongoUrl = 'mongodb://localhost:27017';
    const client = new MongoClient(mongoUrl);

    try {
      await client.connect();

      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      let { page, limit } = pageOptions;

      const users = await collection.find().skip(Number(page)).limit(Number(limit)).toArray();

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

}
