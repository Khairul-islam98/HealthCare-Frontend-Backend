import { model, Schema } from 'mongoose';

const messageSchema = new Schema({
  to: { type: String },
  body: { type: String },
  dataSent: { type: Date, default: Date.now },
});

export const Message = model('Message', messageSchema);
