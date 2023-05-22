import { IsString, IsNotEmpty, IsBoolean, IsDate } from 'class-validator';

export class CreateNewUserDto {
  @IsString()
  _id: string;

  @IsBoolean()
  isOnline: boolean;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsDate()
  inscriptionDate: string;
}