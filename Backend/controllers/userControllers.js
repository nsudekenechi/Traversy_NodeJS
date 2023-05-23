const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Enter All Fields")
    }
    const userExists = User.find({ email });
    if (userExists) {
        res.status(400)
        throw new Error("User Already Exists");
    }
    // Hashing Passwords
    const hashedPass = await bcrypt.hashSync(password, 10);
    // Creating User in DB
    const user = await User.create({
        name,
        email,
        password: hashedPass
    })

    if (user) {
        res.status(201).json({ _id: user.id, name: user.name, email: user.email, token: generateToken(user._id) })
    } else {
        res.status(400);
        throw new Error("Couldn't Create User");
    }

})

const loginUser = asyncHandler(async (req, res) => {
    const { password, email } = req.body
    const user = await User.findOne({ email });

    const comparePass = await bcrypt.compare(password, user.password)
    if (comparePass) {
        res.status(201).json({ _id: user.id, name: user.name, email: user.email, token: generateToken(user._id) })

    } else {
        res.status(400);
        throw new Error("Invalid User");
    }
})

const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);
    res.status(200).json({
        id: _id,
        name,
        email
    });
})
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRETKEY, { expiresIn: "30d" })
}
module.exports = { registerUser, loginUser, getMe }