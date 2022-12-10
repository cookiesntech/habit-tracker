const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  habit: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    require: true,
  },
  unit: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Log", LogSchema);
