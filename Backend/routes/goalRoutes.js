const express = require('express');
const router = express.Router();
const { getGoals, createGoals, updateGoal, deleteGoal } = require("../controllers/goalControllers")
router.route("/").get(getGoals).post(createGoals);
router.route("/:id").patch(updateGoal).delete(deleteGoal)
module.exports = router;