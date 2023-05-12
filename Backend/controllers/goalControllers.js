const asyncHandler = require("express-async-handler")
// @desc    Get Goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.json({ message: "Get Goals" })
})

// @desc    Create Goals
// @route   POST api/goals
// @access  Private
const createGoals = asyncHandler(async (req, res) => {

    if (Object.keys(req.body).length === 0) {
        res.status(400)
        throw new Error("Add a field")
    }

    res.json({ message: "create Goals" })
})

// @desc    Update Goals
// @route   PATCH api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.json({ message: "update Goals" })
})


// @desc    Update Goals
// @route   PATCH api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.json({ message: "delete Goals" })
})

module.exports = {
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal
}