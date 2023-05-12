const mongoose = require("mongoose");
const colors = require("colors")
const connDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected ${conn.connection.host}`.green)
    } catch (error) {
        console.log(`${error.message}`.red)
    }
}

module.exports = connDB