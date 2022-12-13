const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  habit: {
    type: String,
    require: true,
  },
  increment: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Habit", HabitSchema);
