//const cloudinary = require("../middleware/cloudinary");
const Log = require("../models/Log");
const Habit = require("../models/Habit");


module.exports = {
  getLog: async (req, res) => {
    try {
        const userId = req.user.id;
        const logs = await Log.find({user: userId}).lean();
        console.log(logs.habits)
        console.log(logs[0].habits)
        res.render("logs.ejs", { logs: logs, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  createLog: async (req, res) => {
    try {

        const dailyHabits = await Habit.find({user: req.user.id})
        console.log(dailyHabits);
        const date = new Date;
        await Log.create({
          habits: dailyHabits,
          date: date,
          user: req.user.id
        });
      
      res.redirect("/logs");
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
