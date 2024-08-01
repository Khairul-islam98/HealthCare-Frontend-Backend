import express from 'express';
import { PatientControllers } from './patient.controller';

const router = express.Router();

router.post('/', PatientControllers.createPatient);
router.get('/:userId', PatientControllers.getSinglePatient);
router.get('/', PatientControllers.getAllPatients);

export const PatientRoutes = router;
