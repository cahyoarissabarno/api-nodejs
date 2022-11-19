const mongoose = require('mongoose'); // import mongoose
const Schema = mongoose.Schema; // import schema object

// buat skema baru
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

// export model
module.exports = mongoose.model('Post', postSchema);