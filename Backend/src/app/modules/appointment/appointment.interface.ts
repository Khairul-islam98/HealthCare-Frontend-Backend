import { Types } from 'mongoose';

export interface IAppointment {
  patientId: Types.ObjectId;
  userId: Types.ObjectId;
  schedule: Date;
  status: 'pending' | 'scheduled' | 'cancelled';
  primaryPhysician: string;
  reason: string;
  note: string;
  cancellationReason: string;
}
