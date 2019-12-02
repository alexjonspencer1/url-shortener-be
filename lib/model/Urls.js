const { Schema, model } = require('mongoose');

const schema = new Schema ({
  originalUrl: {
    type: String,
    required: true
  },
  urlCode: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('Urls', schema);