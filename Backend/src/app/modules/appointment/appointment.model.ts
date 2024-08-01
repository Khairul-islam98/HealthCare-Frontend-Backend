import { model, Schema } from 'mongoose';
import { IAppointment } from './appointment.interface';

const appointmentSchema = new Schema<IAppointment>(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'Patient',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    schedule: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'scheduled', 'cancelled'],
      required: true,
    },
    primaryPhysician: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
    },
    note: {
      type: String,
    },
    cancellationReason: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Appointment = model<IAppointment>(
  'Appointment',
  appointmentSchema,
);
