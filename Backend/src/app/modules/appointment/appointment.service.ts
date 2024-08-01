import QueryBuilder from '../../builder/QueryBuilder';
import { IAppointment } from './appointment.interface';
import { Appointment } from './appointment.model';

const createAppointmentIntoDB = async (payload: IAppointment) => {
  const result = await Appointment.create(payload);
  return result;
};
const getAllAppointmentFromDB = async (query: Record<string, unknown>) => {
  const appointmentQuery = new QueryBuilder(
    Appointment.find().populate('patientId userId'),
    query,
  )
    .filter()
    .sort();
  const result = await appointmentQuery.modelQuery;

  let initialCounts = {
    scheduledCount: 0,
    pendingCount: 0,
    cancelledCount: 0,
    total: 0,
  };

  result.forEach((appointment: IAppointment) => {
    initialCounts.total += 1;
    if (appointment.status === 'scheduled') {
      initialCounts.scheduledCount += 1;
    } else if (appointment.status === 'pending') {
      initialCounts.pendingCount += 1;
    } else if (appointment.status === 'cancelled') {
      initialCounts.cancelledCount += 1;
    }
  });

  const meta = initialCounts;

  return {
    meta,
    result,
  };
};

const getSingleAppointmentFromDB = async (id: string) => {
  const result = await Appointment.findById(id).populate('patientId userId');
  return result;
};

const getUpdateAppointmentIntoDB = async (
  id: string,
  payload: Partial<IAppointment>,
) => {
  const result = await Appointment.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AppointmentService = {
  createAppointmentIntoDB,
  getAllAppointmentFromDB,
  getSingleAppointmentFromDB,
  getUpdateAppointmentIntoDB,
};
