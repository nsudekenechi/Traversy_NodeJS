const mongoose = require("mongoose");
const goalModel = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Text Should be included"]
    }
})

module.exports = mongoose.model("goal", goalModel)