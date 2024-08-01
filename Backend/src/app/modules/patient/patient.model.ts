import { model, Schema, Types } from 'mongoose';
import { IPatient } from './patient.interface';
import { string } from 'zod';

const patientSchema = new Schema<IPatient>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
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
  privacyConsent: {
    type: Boolean,
    default: null,
  },
  treatmentConsent: {
    type: Boolean,
    default: null,
  },
  disclosureConsent: {
    type: Boolean,
    default: null,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  birthDate: {
    type: String,
    required: true,
  },
  addresss: {
    type: String,
  },
  occupation: {
    type: String,
  },
  emergencyContactName: {
    type: String,
  },
  emergencyContactNumber: {
    type: String,
  },
  primaryPhysician: {
    type: String,
  },
  insuranceProvider: {
    type: String,
  },
  insurancePolicyNumber: {
    type: String,
  },
  allergies: {
    type: String,
  },
  currentMedication: {
    type: String,
  },
  familyMedicalHistory: {
    type: String,
  },
  pastMedicalHistory: {
    type: String,
  },
  identificationType: {
    type: String,
  },
  identificationNumber: {
    type: String,
  },
  identificationDocument: {
    type: String,
  },
});

export const Patient = model<IPatient>('Patient', patientSchema);
