import { Test } from '@nestjs/testing';
import { UsersService } from '../app/users/users.service';
import { CreateNewUserDto } from '../app/users-dto/create-user.dto';
import { UpdateUserDto } from '../app/users-dto/update-user.dto';
import { AppModule } from '../app/app.module';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userId = uuidv4();
      const createUserDto: CreateNewUserDto = {
        _id: userId,
        isOnline: false,
        name: 'John Doe',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/26/2621da26f5c7e9163a60f0a9d1129f5e53984663.jpg',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        username: 'johndoe',
        phone: '123456789',
        inscriptionDate: format(new Date(), 'dd/MM/yyyy'),
      };

      const createdUser = await usersService.createUser(createUserDto);

      expect(createdUser).toBeDefined();
      expect(createdUser._id).toBe(userId);
      expect(createdUser.isOnline).toBe(createUserDto.isOnline);
      expect(createdUser.name).toBe(createUserDto.name);
      expect(createdUser.avatar).toBe(createUserDto.avatar);
      expect(createdUser.lastName).toBe(createUserDto.lastName);
      expect(createdUser.email).toBe(createUserDto.email);
      expect(createdUser.username).toBe(createUserDto.username);
      expect(createdUser.phone).toBe(createUserDto.phone);
      expect(createdUser.inscriptionDate).toBe(createUserDto.inscriptionDate);
    });
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      const pageOptions = { page: 0, limit: 10 };
      const users = await usersService.getAllUsers(pageOptions);

      expect(Array.isArray(users)).toBe(true);
    });
  });

  describe('updateUserById', () => {
    it('should update a user by ID', async () => {
      const userId = '1e24db5d-f8ed-4f71-885a-1b9a77530e9e'; //Add manually the first _id of the the DB/ Should call the getUsers and get the id of the first user. (WIP)
      const updateUserDto: UpdateUserDto = {
        name: 'Updated Name',
      };

      const updatedUser = await usersService.updateUser(userId, updateUserDto);

      expect(updatedUser).toBeDefined();
      expect(updatedUser._id).toBe(userId);
      expect(updatedUser.name).toBe(updateUserDto.name);
    });
  });
});
