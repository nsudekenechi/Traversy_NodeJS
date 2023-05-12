const asyncHandler = require("express-async-handler")
const goal = require("../models/goalModel")
// @desc    Get Goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const allGoals = await goal.find();
    res.status(200).json(allGoals)
})

// @desc    Create Goals
// @route   POST api/goals
// @access  Private
const createGoals = asyncHandler(async (req, res) => {

    if (Object.keys(req.body).length === 0) {
        res.status(400)
        throw new Error("Add a field")
    }
    const newGoal = await goal.create({
        text: req.body.text
    })
    res.status(201).json(newGoal)
})

// @desc    Update Goals
// @route   PATCH api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const getGoal = await goal.findById(req.params.id);
    if (!getGoal) {
        res.status(400);
        throw new Error("Couldn't Find Goal")
    }
    const updatedGoal = await goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedGoal)
})


// @desc    Update Goals
// @route   PATCH api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const getGoal = await goal.findById(req.params.id);
    if (!getGoal) {
        res.status(400);
        throw new Error("Item not Found");
    }
    await goal.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Item Deleted" })
})

module.exports = {
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal
}