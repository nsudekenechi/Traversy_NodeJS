const mongoose = require("mongoose");
const goalModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    text: {
        type: String,
        required: [true, "Text Should be included"]
    }
})

module.exports = mongoose.model("goal", goalModel)