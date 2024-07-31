import { Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  phone: string;
}

export interface UserModel extends Model<IUser> {
  isUserExists(email: string): Promise<IUser | null>;
}
