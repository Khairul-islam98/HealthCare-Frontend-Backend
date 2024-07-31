import { model, Schema } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser, UserModel>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

// userSchema.statics.isUserExists = async function (email: string) {
//   const existingUser = await User.findOne({ email });
//   return existingUser;
// };

export const User = model<IUser, UserModel>('User', userSchema);
