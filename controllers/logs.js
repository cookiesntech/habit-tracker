//const cloudinary = require("../middleware/cloudinary");
const Log = require("../models/Log");
const Habit = require("../models/Habit");
const User = require("../models/User");

module.exports = {
  
  getLog: async (req, res) => {
    try {
        const userId = req.user.id;
        const logs = await Log.find({user: userId}).lean();
        console.log(logs)
        console.log(logs[0].habits[0].habit)
        res.render("logs.ejs", { logs: logs, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  createLog: async (req, res) => {
    try {
        for await (const user of User.find()) {
          const dailyHabits = await Habit.find({user: user._id});
          const date = new Date;
          await Log.create({
            habits: dailyHabits,
            date: date,
            user: user._id
          })
        }
    } catch (err) {
      console.log(err);
    }
  },
  deleteLog: async (req, res) => {
    try {
      console.log(req.params.id)
      await Log.findOneAndDelete({_id:req.params.id});
      console.log("Log deleted");
      res.redirect("/logs");
  } catch(err) {
      console.error(err);
  }
}
};
