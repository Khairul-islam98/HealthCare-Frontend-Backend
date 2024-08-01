import express from 'express';
import { MessageController } from './message.controller';

const router = express.Router();

router.post('/', MessageController.sendSms);

export const MessageRoutes = router;
