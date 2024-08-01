import express from 'express';
import { AppointmentController } from './appointment.controller';

const router = express.Router();

router.post('/', AppointmentController.createAppointment);

router.get('/', AppointmentController.getAllAppointment);

router.get('/:id', AppointmentController.getSingleAppointment);
router.put('/:id', AppointmentController.getUpdateAppointment);

export const AppointmentRoutes = router;
