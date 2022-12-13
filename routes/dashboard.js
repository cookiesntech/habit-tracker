const express = require("express");
const router = express.Router();
//const authController = require("../controllers/auth");
const dashboardController = require("../controllers/dashboard");
//const logsController = require("../controllers/logs");
const { ensureAuth } = require("../middleware/auth");

router.get('/:id', ensureAuth, dashboardController.getDashboard);
router.post('/createHabit', dashboardController.createHabit);
router.put('/increment/:id', dashboardController.addProgress);
router.put('/decrement/:id', dashboardController.deleteProgress);
router.delete('/deleteHabit/:id', dashboardController.deleteHabit);

module.exports = router;