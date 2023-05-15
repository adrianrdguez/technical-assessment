import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../app/users/users.service';
import { CreateNewUserDto } from '../app/users-dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
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
});
