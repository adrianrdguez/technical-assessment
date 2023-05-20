import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../app/users/users.service';
import { CreateNewUserDto } from '../app/users-dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from '../app/users-dto/update-user.dto';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      const pageOptions = {
        page: 0,
        limit: 10,
      };

      const users = await usersService.getAllUsers(pageOptions);

      expect(users).toBeDefined();
      expect(Array.isArray(users)).toBe(true);
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {

      const userId = uuidv4();
      const createUserDto: CreateNewUserDto = {
        _id: userId,
        isOnline: true,
        name: 'John Doe',
        avatar: 'avatar.jpg',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        username: 'johndoe',
        phone: '123456789',
        inscriptionDate: new Date(),
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

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      const userId = uuidv4();
      const createUserDto: CreateNewUserDto = {
        _id: userId,
        isOnline: true,
        name: 'John Doe',
        avatar: 'avatar.jpg',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        username: 'johndoe',
        phone: '123456789',
        inscriptionDate: new Date(),
      };
      const createdUser = await usersService.createUser(createUserDto);

      const updateUserDto: UpdateUserDto = {
        name: 'Updated Name',
        lastName: 'Updated Last Name',
      };
      const updatedUser = await usersService.updateUser(createdUser._id, updateUserDto);

      expect(updatedUser).toBeDefined();
      expect(updatedUser._id).toBe(createdUser._id);
      expect(updatedUser.name).toBe(updateUserDto.name);
      expect(updatedUser.lastName).toBe(updateUserDto.lastName);
    });
  });
});
