const mongoose = require("mongoose");

var Blog = {
  _id: { type: String },
  name: { type: String, required: true },
  email: { type: String},
  title: { type: String, required: true },
  about: { type: String, require: true },
  content: { type: String, required: true },
  dpPath: { type: String },
  dateTime: { type: Date, required: true }
};
const blogSchema = mongoose.Schema({
  blog: Blog
});
module.exports = mongoose.model("Blog", blogSchema);
