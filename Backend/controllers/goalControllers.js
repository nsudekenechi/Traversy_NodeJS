// @desc    Get Goals
// @route   GET api/goals
// @access  Private
const getGoals = (req, res) => {
    res.json({ message: "Get Goals" })
}

// @desc    Create Goals
// @route   POST api/goals
// @access  Private
const createGoals = (req, res) => {

    if (Object.keys(req.body).length === 0) {
        res.status(400)
        throw new Error("Add a field")
    }

    res.json({ message: "create Goals" })
}

// @desc    Update Goals
// @route   PATCH api/goals
// @access  Private
const updateGoal = (req, res) => {
    res.json({ message: "update Goals" })
}


// @desc    Update Goals
// @route   PATCH api/goals
// @access  Private
const deleteGoal = (req, res) => {
    res.json({ message: "delete Goals" })
}

module.exports = {
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal
}