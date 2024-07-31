import { Router } from 'express';
import { PatientRoutes } from '../modules/patient/patient.route';
import { UserRoutes } from '../modules/user/user.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';
import { MessageRoutes } from '../modules/message/message.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/patients',
    route: PatientRoutes,
  },
  {
    path: '/appointments',
    route: AppointmentRoutes,
  },
  {
    path: '/sms',
    route: MessageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
