const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    category: { type: String, required: true, unique: false, trim: true },
    title: { type: String, required: true, unique: false, trim: true },
    url: { type: String, required: false, unique: false, trim: true },
    text: { type: String, required: true, unique: false, trim: true },
    date: { type: String, required: true, unique: false, trim: true },
  },
  {
    timestamps: true,
  }
);
const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
