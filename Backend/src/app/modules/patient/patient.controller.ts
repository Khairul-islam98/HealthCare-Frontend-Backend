import httpStatus from 'http-status';
import sendResponse from '../../utils/catchAsync';
import catchAsync from '../../utils/sendResponse';
import { PatientServices } from './patient.service';

const createPatient = catchAsync(async (req, res) => {
  const result = await PatientServices.createPatientIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Patient created successfully',
    data: result,
  });
});

const getAllPatients = catchAsync(async (req, res) => {
  const result = await PatientServices.getAllPatientsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patients are retrieved successfully',
    data: result,
  });
});

const getSinglePatient = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await PatientServices.getSinglePatientFromDB(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient is retrived successfully',
    data: result,
  });
});

export const PatientControllers = {
  createPatient,
  getAllPatients,
  getSinglePatient,
};
