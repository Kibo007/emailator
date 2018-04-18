const mongoose = require('mongoose');
const { Schema } = mongoose;
const receipientsSchema = require('./Receipients');

const survaysSchema = new Schema({
  title: String,
  subject: String,
  body: String,
  receipients: [receipientsSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  sendDate: Date,
  lastResponded: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('survays', survaysSchema);
