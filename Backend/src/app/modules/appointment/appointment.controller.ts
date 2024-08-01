import httpStatus from 'http-status';
import sendResponse from '../../utils/catchAsync';
import catchAsync from '../../utils/sendResponse';
import { AppointmentService } from './appointment.service';

const createAppointment = catchAsync(async (req, res) => {
  const result = await AppointmentService.createAppointmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Appointment created successfully',
    data: result,
  });
});

const getAllAppointment = catchAsync(async (req, res) => {
  const result = await AppointmentService.getAllAppointmentFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Appointments are retrieved successfully',
    data: result,
  });
});

const getSingleAppointment = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AppointmentService.getSingleAppointmentFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Appointment is retrieved successfully',
    data: result,
  });
});
const getUpdateAppointment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AppointmentService.getUpdateAppointmentIntoDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Appointment update successfully',
    data: result,
  });
});

export const AppointmentController = {
  createAppointment,
  getAllAppointment,
  getSingleAppointment,
  getUpdateAppointment,
};
