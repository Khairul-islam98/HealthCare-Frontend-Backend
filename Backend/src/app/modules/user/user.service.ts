import { IUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: IUser) => {
  // if (await User.isUserExists(payload.email)) {
  //   throw new Error(`${payload.email} is already exists`);
  // }

  const result = await User.create(payload);
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
export const UserServices = {
  createUserIntoDB,
  getSingleUserFromDB,
};
