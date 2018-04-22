const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientsSchema = require('./Recipients');

const surveysSchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [recipientsSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  sendDate: Date,
  lastResponded: Date,
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
});

mongoose.model('surveys', surveysSchema);
