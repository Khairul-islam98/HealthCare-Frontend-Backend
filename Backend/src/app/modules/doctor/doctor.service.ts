import { IDoctor } from './doctor.interface';
import { Doctor } from './doctor.model';

const createDoctorIntoDB = async (payload: IDoctor) => {
  const result = await Doctor.create(payload);
  return result;
};

const getAllDoctorFromDB = async () => {
  const result = await Doctor.find();
  return result;
};

const getSingleDoctorFromDB = async (id: string) => {
  const result = await Doctor.findById(id);
  return result;
};

export const DoctorService = {
  createDoctorIntoDB,
  getAllDoctorFromDB,
  getSingleDoctorFromDB,
};
