require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const app = express();
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");

// Middleware
app.use(cors())

app.use("/post", postRoute);
app.use("/category", categoryRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Connected to the database"))
  .catch(() => {
    console.log("Unable to connect to the database");
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
