const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
// Accepting Body Data from routes
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware for api
app.use("/api/goal", require("./routes/goalRoutes"))
// Middleware for error
app.use(require("./middleware/errorMiddleware"))
app.listen(port)