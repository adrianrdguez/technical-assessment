import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Document } from 'mongoose';
import { format } from 'date-fns';

export type UserDocument = User & Document;

interface Course {
  _id: string;
  title: string;
  description: string;
  percentCompleted: number;
  inscriptionDate: Date;
}

@Schema()
export class User {
  @Prop({ default: uuidv4 })
  _id: string;

  @Prop({ required: true })
  isOnline: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  inscriptionDate: string;

  @Prop([
    {
      _id: { type: String },
      title: { type: String },
      description: { type: String },
      percentCompleted: { type: Number },
      inscriptionDate: { type: String, default: format(new Date(), 'dd/MM/yyyy') },
    },
  ])
  courses: Course[];
}


export const UserSchema = SchemaFactory.createForClass(User);
