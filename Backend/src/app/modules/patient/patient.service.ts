import { IPatient } from './patient.interface';
import { Patient } from './patient.model';

const createPatientIntoDB = async (payload: IPatient) => {
  const result = await Patient.create(payload);
  return result;
};

const getAllPatientsFromDB = async () => {
  const result = await Patient.find().populate('userId');
  return result;
};

const getSinglePatientFromDB = async (userId: string) => {
  const result = await Patient.findOne({ userId }).populate('userId');
  return result;
};

export const PatientServices = {
  createPatientIntoDB,
  getAllPatientsFromDB,
  getSinglePatientFromDB,
};
