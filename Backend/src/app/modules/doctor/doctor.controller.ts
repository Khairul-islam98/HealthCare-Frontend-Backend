import httpStatus from 'http-status';
import sendResponse from '../../utils/catchAsync';
import catchAsync from '../../utils/sendResponse';
import { DoctorService } from './doctor.service';

const createDoctor = catchAsync(async (req, res) => {
  const result = await DoctorService.createDoctorIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Doctor created successfully',
    data: result,
  });
});

const getAllDoctor = catchAsync(async (req, res) => {
  const result = await DoctorService.getAllDoctorFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Doctor are retrived successfully',
    data: result,
  });
});

const getSingleDoctor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DoctorService.getSingleDoctorFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Doctor is retrived successfully',
    data: result,
  });
});

export const DoctorController = {
  createDoctor,
  getAllDoctor,
  getSingleDoctor,
};
