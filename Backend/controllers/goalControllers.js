// @desc    Get Goals
// @route   GET api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status.json({ message: "Get Goals" })
}

// @desc    Create Goals
// @route   POST api/goals
// @access  Private
const createGoals = (req, res) => {
    res.status.json({ message: "create Goals" })
}

// @desc    Update Goals
// @route   PATCH api/goals
// @access  Private
const updateGoal = (req, res) => {
    res.status.json({ message: "update Goals" })
}


// @desc    Update Goals
// @route   PATCH api/goals
// @access  Private
const deleteGoal = (req, res) => {
    res.status.json({ message: "delete Goals" })
}

module.exports = {
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal
}