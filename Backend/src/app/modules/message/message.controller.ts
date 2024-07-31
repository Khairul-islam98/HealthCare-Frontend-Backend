import twilio from 'twilio';
import config from '../../config';
import catchAsync from '../../utils/sendResponse';
import { Message } from './message.modal';
import sendResponse from '../../utils/catchAsync';
import httpStatus from 'http-status';

const accountSid = config.twilio_account_sid;
const authToken = config.twilio_auth_token;
const client = twilio(accountSid, authToken);

const sendSms = catchAsync(async (req, res) => {
  const { to, body } = req.body;
  try {
    const message = await client.messages.create({
      body: body,
      to: to,
      from: config.twilio_phone_number,
    });

    const newMessage = new Message({ to, body });
    await newMessage.save();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'SMS sent successfully',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error in sendSms controller:', error);

    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: 'Internal Server Error',
      data: { error },
    });
  }
});

export const MessageController = {
  sendSms,
};
