const express = require('express');
require('dotenv').config()
const connDB = require("./config/db");
const protect = require('./middleware/authMiddleware');
const app = express();
const port = process.env.PORT || 5000;
// Accepting Body Data from routes
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware for api
app.use("/api/goal", protect, require("./routes/goalRoutes"))
app.use("/api/users", require("./routes/userRoutes"));
// Middleware for error

app.use(require("./middleware/errorMiddleware"))
app.listen(port)

// DB
connDB()