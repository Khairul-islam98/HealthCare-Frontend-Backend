import { Model, Types } from 'mongoose';

export interface IPatient {
  userId: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: 'Male' | 'Female' | 'Other';
  addresss: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string;
  currentMedication: string;
  familyMedicalHistory: string;
  pastMedicalHistory: string;
  identificationType: string;
  identificationNumber: string;
  identificationDocument: string;
  privacyConsent: boolean;
  treatmentConsent: boolean;
  disclosureConsent: boolean;
}
